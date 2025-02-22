export const useGetProcessData = () => {
  type ProcessData = {
    title: string
    subtitle: string
    steps: {
      id: number
      number: string
      title: string
      text: string
    }[]
  }

  const processData: ProcessData = {
    title: 'Our Working Process',
    subtitle: 'Step-by-Step Guide to Achieving Your Business Goals',
    steps: [
      {
        id: 1,
        number: '01',
        title: 'Consultation',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      },
      {
        id: 2,
        number: '02',
        title: 'Research and Strategy Development',
        text: 'Our team conducts thorough market research and competitor analysis to devise a comprehensive marketing strategy tailored to your unique business needs. We evaluate industry trends, customer behavior, and digital performance metrics to craft a robust plan that maximizes your potential.',
      },
      {
        id: 3,
        number: '03',
        title: 'Implementation',
        text: 'With the strategy in place, our experts begin the implementation phase. This involves executing the plan through various channels, including content creation, SEO, social media, and targeted digital advertising, ensuring every element is aligned with your business objectives.',
      },
      {
        id: 4,
        number: '04',
        title: 'Monitoring and Optimization',
        text: 'Post-launch, we continuously monitor campaign performance using advanced analytics. Our team makes data-driven adjustments to optimize every component, ensuring maximum efficiency and adaptability to market changes.',
      },
      {
        id: 5,
        number: '05',
        title: 'Reporting and Communication',
        text: 'Transparency is key. We provide detailed performance reports and hold regular update meetings, ensuring you are informed about campaign progress, key metrics, and any strategic adjustments along the way.',
      },
      {
        id: 6,
        number: '06',
        title: 'Continual Improvement',
        text: 'In the final phase, we analyze all campaign data and client feedback to refine our strategies. This ongoing process of evaluation and innovation ensures that your marketing efforts evolve with industry trends, continually driving better results.',
      },
    ],
  }

  return { processData }
}
