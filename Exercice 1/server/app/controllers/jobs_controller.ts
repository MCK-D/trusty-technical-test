import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import { Company } from '../interfaces/Company.js';

export default class JobsController {
  async getOpenJobs({ params, response }: HttpContext) {
    const company = params.companyName;
    if (!company)
      return response.status(400).json({error: 'A company name is required'});

    const api_url = `${env.get('WORKABLE_API_URL')}/api/v1/widget/accounts/${company}?details=true`;
    try {
      const res = await fetch(api_url);
      const json: Company = await res.json() as Company;

      return response.json({
        companyName: json.name,
        endpointsats: api_url,
        nbrOpenJobs: json.jobs.length,
        jobs: json.jobs.map((job) => ({
          ats_id: job.shortcode,
          name: job.title,
          jobUrl: job.url,
          department: job.department,
          contract: job.employment_type,
          education: job.education ?? "",
          experience: job.experience,
          position: job.function,
          location: `${job.city}, ${job.state}, ${job.country}`,
          publishedAt: job.published_on,
        })),
      })
    } catch (error) {
      return response.status(500).json({error: `Could not fetch data for ${company}.`});
    }
  }
}
