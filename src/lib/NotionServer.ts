import { Client } from '@notionhq/client';

const auth = process.env.NOTION_ACCESS_TOKEN;

const database = process.env.NOTION_DATABASE_QUESTION_ID ?? '';
const databaseList = process.env.NOTION_DATABASE_QUESTION_ID_LIST ?? '';

type Question = any;

export default class NotionService {
  client: Client;

  constructor() {
    this.client = new Client({ auth });
  }

  async queryWaitlist(): Promise<Question[]> {
    const response = await this.client.databases.query({
      database_id: databaseList,
    });

    return response.results;
  }
  async createWallet(address: string, email?: string): Promise<any> {
    const page = {
      parent: {
        type: 'database_id',
        database_id: database,
      },
      properties: {
        title: [
          {
            text: {
              content: address,
            },
          },
        ],
      },
    };
    //@ts-ignore
    page['properties']['Email'] = [
      {
        text: {
          content: email,
        },
      },
    ];
    const response = await this.client.pages.create(page as any);
    return response;
  }
}
