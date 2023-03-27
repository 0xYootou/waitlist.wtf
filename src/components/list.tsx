import { Badge, Button, Card, Link } from '@nextui-org/react';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function List() {
  const [list, setList] = useState<
    (PageObjectResponse | PartialPageObjectResponse)[]
  >([]);
  const [loading, setLoading] = useState(false);

  async function loadList() {
    setLoading(true);
    const loadingId = toast.loading('Please wait...');
    try {
      const res = await fetch('/api/list');
      const json = (await res.json()) as Array<
        PageObjectResponse | PartialPageObjectResponse
      >;
      console.log('json', json);
      setList(json);
    } catch (e) {
      console.log('e', e);
    }
    setLoading(false);
    toast.dismiss(loadingId);
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
        width: '670px',
      }}
    >
      {list.map((item: any) => {
        return (
          <Card
            key={item.id}
            style={{
              width: '320px',
            }}
          >
            <Link
              css={{
                background: '#333',
                color: '#fff',
                borderRadius: '8px',
                display: 'block',
                width: '100%',
                height: '100%',
                '&:hover': {
                  background: '#333',
                },
              }}
              target="_blank"
              href={item.properties.Link.url}
            >
              <div style={{ padding: '25px 25px', width: '320px' }}>
                <div
                  style={{
                    fontSize: '18px',
                    lineHeight: '25px',
                  }}
                >
                  {item.properties.Name.title.map((title: any) => {
                    return <span key={title.id}>{title.text.content}</span>;
                  })}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#777',
                    marginTop: '10px',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Badge
                    disableOutline={true}
                    size="xs"
                    style={{
                      fontWeight: 'normal',
                      fontSize: '12px',
                      padding: '3px 8px',
                      background: '#555',
                    }}
                  >
                    {item.properties.Status.status.name}
                  </Badge>
                  {item.properties.Tag.multi_select.map((tag: any) => {
                    return (
                      <Badge
                        disableOutline={true}
                        size="xs"
                        style={{
                          fontWeight: 'normal',
                          fontSize: '12px',
                          padding: '3px 8px',
                        }}
                        key={tag.id}
                      >
                        {tag.name}
                      </Badge>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    lineHeight: '20px',
                    marginTop: '10px',
                    color: '#777',
                  }}
                >
                  {item.properties.Desc.rich_text.map((title: any) => {
                    return <span key={title.id}>{title.plain_text}</span>;
                  })}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#777',
                    marginTop: '15px',
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Button size="sm" auto={true} color={'success'}>
                    Join
                  </Button>
                </div>
              </div>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
