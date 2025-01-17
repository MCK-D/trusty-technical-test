import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import { Company, JobDetails } from '../interfaces/Company.js';

function formatAddress(city: string, state: string, country: string): string {
  const parts = [city, state, country].filter(part => part !== "");
  return parts.join(", ");
}


export default class JobsController {
  async getOpenJobs({ params, request, response }: HttpContext) {
    const company = params.companyName;
    const { department, contract, location, ...other } = request.qs();


    if (!company)
      return response.status(400).json({error: 'A company name is required'});

    const unknownParams = Object.keys(other)
    if (unknownParams.length > 0)
      return response.status(400).json({error: `Unknown query parameters: ${unknownParams.join(', ')}`});

    const api_url = `${env.get('WORKABLE_API_URL')}/api/v1/widget/accounts/${company}?details=true`;

    try {
      const res = await fetch(api_url);
      const { name, jobs } = await res.json() as Company;

      const filteredJobs = jobs.filter((job) => {
        return (
          (!department || job.department === department) &&
          (!contract || job.employment_type === contract) &&
          (!location || formatAddress(job.city, job.state, job.country) === location)
        );
      });

      const formatJob = (job: JobDetails) => ({
        ats_id: job.shortcode,
        name: job.title,
        jobUrl: job.url,
        department: job.department,
        contract: job.employment_type,
        education: job.education ?? '',
        experience: job.experience,
        position: job.function,
        location: formatAddress(job.city, job.state, job.country),
        publishedAt: job.published_on,
      });


      return response.json({
        companyName: name,
        endpointsats: api_url,
        nbrOpenJobs: filteredJobs.length,
        jobs: filteredJobs.map(formatJob),
      })

    } catch (error) {
      return response.status(500).json({error: `Could not fetch data for ${company}.`});
    }
  }
}
