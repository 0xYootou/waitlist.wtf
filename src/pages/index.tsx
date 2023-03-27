import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Script from 'next/script';
import NewsLetterSignUpForm from '../components/form';
import toast, { Toaster } from 'react-hot-toast';
import { Tooltip } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { List } from '../components/list';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Waitlist.wtf</title>
        <meta
          name="description"
          content="join all ai product waitlist by one click"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wait.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HLPJZF3XF1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HLPJZF3XF1');`,
          }}
        ></script>
      </Head>
      <main
        className={styles.main}
        style={{
          margin: '0 auto',
          padding: '0',
        }}
      >
        <div
          className={styles.description}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: '0 auto',
            padding: '0',
          }}
        >
          <h1
            style={{
              marginBottom: '10px',
              textAlign: 'center',
              marginTop: '100px',
            }}
          >
            <Text
              h1
              size={30}
              css={{
                textGradient: '45deg, $yellow600 30%, $red600 60%',
              }}
              weight="bold"
            >
              Waitlist.wtf{' '}
              <a
                href="https://waitlist-wtf.gitbook.io/whitepaper/"
                style={{
                  fontSize: '14px',
                  color: '#999',
                  fontWeight: 'normal',
                  letterSpacing: '0px',
                  verticalAlign: '3px',
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2777"
                  width="20"
                  height="20"
                  style={{
                    verticalAlign: '-4px',
                    marginLeft: '15px',
                  }}
                >
                  <path
                    d="M865.792 322.432l-215.466667-226.645333a31.701333 31.701333 0 0 0-23.04-9.941334h-8.746666a5.76 5.76 0 0 1-1.066667-0.256A4.522667 4.522667 0 0 0 616.106667 85.333333a4.778667 4.778667 0 0 0-1.408 0.256 5.717333 5.717333 0 0 1-1.066667 0.256H344.32c-105.685333 0-194.986667 88.106667-194.986667 192.426667v177.450667c0 17.749333 14.293333 32.213333 31.914667 32.213333a32.085333 32.085333 0 0 0 31.872-32.213333V278.186667c0-69.333333 60.074667-127.957333 131.2-127.957334h239.914667v92.288c0 78.592 63.274667 142.634667 141.098666 142.805334a32.042667 32.042667 0 0 0 31.914667-32.128 32.042667 32.042667 0 0 0-31.786667-32.298667 78.08 78.08 0 0 1-77.44-78.378667V186.410667l162.858667 171.264v380.8c0 72.32-59.221333 135.765333-126.72 135.765333H344.32c-73.557333 0-131.2-59.648-131.2-135.765333v-107.648a32.085333 32.085333 0 0 0-31.872-32.213334 32.085333 32.085333 0 0 0-31.914667 32.213334v107.648C149.333333 850.773333 235.008 938.666667 344.32 938.666667h339.84c103.253333 0 190.506667-91.648 190.506667-200.192V344.746667a32.426667 32.426667 0 0 0-8.874667-22.314667zM378.453333 699.946667h229.632a32.085333 32.085333 0 0 0 31.872-32.213334 32.085333 32.085333 0 0 0-31.872-32.213333H378.453333a32.085333 32.085333 0 0 0-31.914666 32.213333c0 17.792 14.293333 32.213333 31.914666 32.213334z m142.762667-212.736H378.453333a32.085333 32.085333 0 0 1-31.914666-32.213334c0-17.749333 14.293333-32.213333 31.914666-32.213333h142.762667c17.621333 0 31.914667 14.464 31.914667 32.213333a32.085333 32.085333 0 0 1-31.914667 32.213334z"
                    fill="#666"
                  ></path>
                </svg>
                WhitePaper
              </a>
            </Text>

            <Text
              h1
              size={40}
              css={{
                textGradient: '45deg, $blue600 -20%, $pink600 50%',
              }}
              weight="bold"
            >
              Join all AI product waitlist in one place
            </Text>
          </h1>
          <NewsLetterSignUpForm />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              margin: '20px 0 40px 0',
            }}
          >
            <a
              href="https://github.com/waitlist-wtf/waitlist.wtf"
              style={{}}
              target="_blank"
            >
              <Tooltip content="Github code" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z"
                    fill="#040000"
                  ></path>
                </svg>
              </Tooltip>
            </a>
            <a
              href="https://twitter.com/intent/retweet?tweet_id=1639232387354853377"
              target="_blank"
            >
              <Tooltip content="Share on Twitter" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m215.3 337.7c0.3 4.7 0.3 9.6 0.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2-50.8-10.3-88.9-55-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1-30.9-20.6-49.5-55.3-49.5-92.4 0-20.7 5.4-39.6 15.1-56 54.7 67.4 136.9 111.4 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
                    fill="#1296DB"
                  ></path>
                </svg>
              </Tooltip>
            </a>
            <a
              onClick={() => {
                navigator.clipboard.writeText(
                  `一个快捷加入所有 ai 产品 waitlist 的产品，https://waitlist.wtf 
=============
令人绝望的是，目前网站功能还没开始开发，需要先申请加入 waitlist.wtf 的 waitlist，开发好了会通知大家😂😂

-------------
A product that quickly joins the waitlist of all ai products, https://waitlist.wtf
=============
It is desperate that the website function has not yet been developed. You need to apply to join the waitlist of waitlist.wtf. They will notify you when the development is completed 😂😂`
                );
                toast.success('Copied to clipboard successfully!');
              }}
            >
              <Tooltip content="Copy marketing spread slogan" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M96.1 575.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"
                    fill="#4D4D4D"
                    p-id="4542"
                  ></path>
                  <path
                    d="M742.1 450.7l-269.5-2.1c-14.3-0.1-26 13.8-26 31s11.7 31.3 26 31.4l269.5 2.1c14.3 0.1 26-13.8 26-31s-11.7-31.3-26-31.4zM742.1 577.7l-269.5-2.1c-14.3-0.1-26 13.8-26 31s11.7 31.3 26 31.4l269.5 2.1c14.3 0.2 26-13.8 26-31s-11.7-31.3-26-31.4z"
                    fill="#4D4D4D"
                    p-id="4543"
                  ></path>
                  <path
                    d="M736.1 63.9H417c-70.4 0-128 57.6-128 128h-64.9c-70.4 0-128 57.6-128 128v128c-0.1 17.7 14.4 32 32.2 32 17.8 0 32.2-14.4 32.2-32.1V320c0-35.2 28.8-64 64-64H289v447.8c0 70.4 57.6 128 128 128h255.1c-0.1 35.2-28.8 63.8-64 63.8H224.5c-35.2 0-64-28.8-64-64V703.5c0-17.7-14.4-32.1-32.2-32.1-17.8 0-32.3 14.4-32.3 32.1v128.3c0 70.4 57.6 128 128 128h384.1c70.4 0 128-57.6 128-128h65c70.4 0 128-57.6 128-128V255.9l-193-192z m0.1 63.4l127.7 128.3H800c-35.2 0-64-28.8-64-64v-64.3h0.2z m64 641H416.1c-35.2 0-64-28.8-64-64v-513c0-35.2 28.8-64 64-64H671V191c0 70.4 57.6 128 128 128h65.2v385.3c0 35.2-28.8 64-64 64z"
                    fill="#4D4D4D"
                    p-id="4544"
                  ></path>
                </svg>
              </Tooltip>
            </a>
          </div>
        </div>

        <List />

        <div
          style={{
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '100px',
            marginTop: '90px',
            borderTop: '1px solid #eee',
            paddingTop: '20px',
          }}
        >
          <div
            style={{
              color: '#333',
              fontWeight: 'bold',
              fontSize: '18px',
              lineHeight: '50px',
            }}
          >
            Or try our other product
          </div>
          <a href="https://chrome.google.com/webstore/detail/chatgpt-anywhere-chat-on/jcfkfnhebnhaldhlgfiaglpcjkdikbhc?hl=zh-CN&authuser=1">
            <img src="/ad.png" alt="chrome" width={'200px'} />
          </a>
        </div>
        <Toaster />
      </main>
    </>
  );
}
