import {
  Badge,
  Button,
  Card,
  Container,
  Link,
  Loading,
} from '@nextui-org/react';
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
    <Container
      css={{
        width: '720px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 0,

        '@media (max-width: 768px)': {
          width: '100%',
        },
      }}
    >
      <Button
        auto={true}
        style={{
          margin: '10px 0 20px 0',
        }}
        color={'success'}
        onClick={() => {
          window.location.href = 'https://notionforms.io/forms/submit-waitlist';
        }}
      >
        Report new Waitlist
      </Button>
      {loading && (
        <Loading
          style={{
            margin: '50px auto',
          }}
        />
      )}
      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px',
          width: '100%',
          padding: 0,
          '@media (max-width: 768px)': {
            width: '90%',
          },
        }}
      >
        {list.map((item: any) => {
          return (
            <Card
              key={item.id}
              css={{
                width: '320px',
                background: '#333',
                '@media (max-width: 768px)': {
                  width: '100%',
                },
                '&:hover': {
                  background: '#333',
                },
              }}
            >
              <a
                style={{
                  color: '#fff',
                  borderRadius: '8px',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                }}
                target="_blank"
                href={item.properties.Link.url}
              >
                <Container
                  css={{
                    padding: '25px 25px',
                    width: '100%',
                  }}
                >
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
                    <Button
                      size="sm"
                      auto={true}
                      color={'success'}
                      disabled={
                        item.properties.Status.status.name == 'Not started'
                      }
                    >
                      {item.properties.Status.status.name == 'Not started'
                        ? 'Not started'
                        : 'Join'}
                    </Button>
                  </div>
                </Container>
              </a>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
}
