import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import Video from '../components/video'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>GG Production</title>
        <meta property="og:title" content="GG Production " />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <div className={styles['container01']}>
            <Link to="/" className={styles['navlink']}>
              <img
                alt="image"
                src="/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
                className={` ${styles['image']} ${projectStyles['thqLink']} `}
              />
            </Link>
          </div>
          <div className={styles['Links-container']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['thqLink']} `}
            >
              HOME
            </Link>
            <span className={styles['text']}>WEDDING</span>
            <Link
              to="/cinema"
              className={` ${styles['navlink2']} ${projectStyles['thqLink']} `}
            >
              CINEMA
            </Link>
            <Link
              to="/prices"
              className={` ${styles['navlink3']} ${projectStyles['thqLink']} `}
            >
              PRICING
            </Link>
            <span className={styles['text001']}>CONTACT</span>
          </div>
          <div className={styles['Right-side']}>
            <img
              alt="image"
              src="/playground_assets/ggtv_logo%20white-1000h.png"
              className={styles['image1']}
            />
            <Link to="/reserve-now" className={styles['navlink4']}>
              <SolidButton
                REZERVA="RESERVE NOW"
                className={` ${styles['component']} ${projectStyles['thqLink']} `}
              ></SolidButton>
            </Link>
          </div>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['container02']}>
            <h1
              className={` ${styles['text002']} ${projectStyles['heading']} `}
            >
              Welcome to GG Production
            </h1>
          </div>
          <h2
            className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
          >
            &quot;Go extreme. Thereâs no turning back.&quot;
          </h2>
          <span className={styles['text003']}>
            <span className={styles['text004']}></span>
            <span className={styles['text005']}>Discover our prices.</span>
          </span>
          <Link
            to="/reserve-now"
            autoFocus="true"
            className={` ${styles['Button']} ${projectStyles['button']} ${projectStyles['button']} ${projectStyles['thqLink']} `}
          >
            RESERVE NOW
          </Link>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1>Latest Wedding Photos</h1>
        <span className={styles['text007']}>Recommended</span>
        <div className={styles['Cards-container']}>
          <PlaceCard
            image="https://i.ibb.co/jyLp42D/IMG-2547-copy.jpg"
            titlu="Marta &amp; Tamas"
            image_alt="marta-tamas"
            description=" "
          ></PlaceCard>
          <PlaceCard
            image="https://i.ibb.co/N2x8Qv5/IMG-25471.jpg"
            titlu="Ingrid &amp; Tamas"
            description=" "
          ></PlaceCard>
          <PlaceCard
            image="https://i.ibb.co/kqqKMyP/IMG-25472.jpg"
            titlu="Reka &amp; Levente"
            description=" "
          ></PlaceCard>
          <PlaceCard
            image="https://i.ibb.co/R359DNz/IMG-254732.jpg"
            titlu="Ionela &amp; Octavian"
            description=" "
          ></PlaceCard>
          <PlaceCard
            image="https://i.ibb.co/D1vrZfy/IMG-www2547.jpg"
            titlu="Barbara &amp; Lorant"
            description=" "
          ></PlaceCard>
          <PlaceCard
            image="https://i.ibb.co/L106Ljq/IMG-2222547.jpg"
            titlu="Ingrid &amp; Szabolcs"
            description=" "
          ></PlaceCard>
        </div>
      </div>
      <div id="main-section" className={styles['Main1']}>
        <h1>Latest Video Projects</h1>
        <span className={styles['text009']}>Recommended</span>
        <div className={styles['Cards-container1']}>
          <a
            href="https://youtu.be/is5ALQZjXUU"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <Video
              image="https://i.ibb.co/XtCs1Hb/play1.jpg"
              titlu="Marta &amp; Tamas "
              description=" "
              rootClassName="rootClassName6"
              className={` ${styles['component07']} ${projectStyles['thqLink']} `}
            ></Video>
          </a>
          <a
            href="https://youtu.be/Dgiwfz5X-5o"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link01']}
          >
            <Video
              image="https://i.ibb.co/TW2T8Fr/play2.jpg"
              titlu="Ingrid &amp; Tamas "
              description=" "
              rootClassName="rootClassName7"
              className={` ${styles['component08']} ${projectStyles['thqLink']} `}
            ></Video>
          </a>
          <a
            href="https://youtu.be/TCDYLYomtQo"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link02']}
          >
            <Video
              image="https://i.ibb.co/g4QZ8xh/play3.jpg"
              titlu="Reka &amp; Levente"
              description=" "
              rootClassName="rootClassName8"
              className={` ${styles['component09']} ${projectStyles['thqLink']} `}
            ></Video>
          </a>
          <a
            href="https://youtu.be/bxl5FyVJG0s"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link03']}
          >
            <Video
              image="https://i.ibb.co/GcGNYv3/play4.jpg"
              titlu="Ionela &amp; Octavian"
              description=" "
              rootClassName="rootClassName9"
              className={` ${styles['component10']} ${projectStyles['thqLink']} `}
            ></Video>
          </a>
          <a
            href="https://youtu.be/3-hzDXB6l1Q"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link04']}
          >
            <Video
              image="https://i.ibb.co/fNQfPsK/play5.jpg"
              titlu="Barbara &amp; Lorand"
              description=" "
              rootClassName="rootClassName10"
              className={` ${styles['component11']} ${projectStyles['thqLink']} `}
            ></Video>
          </a>
          <a
            href="https://youtu.be/QCYZQ4-FJJk"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link05']}
          >
            <Video
              image="https://i.ibb.co/VS0Ytjz/play6.jpg"
              titlu="Ingrid &amp; Szabolcs"
              description=" "
              rootClassName="rootClassName11"
              className={` ${styles['component12']} ${projectStyles['thqLink']} `}
            ></Video>
          </a>
        </div>
        <h1>PRICE LIST</h1>
      </div>
      <div className={styles['Pricing-Line-1']}>
        <div className={styles['container03']}>
          <div className={styles['PricingCard']}>
            <span className={styles['text011']}>ECO</span>
            <div className={styles['container04']}>
              <span className={styles['text012']}>
                <span>â¬</span>
                <span></span>
              </span>
              <span className={styles['text015']}>500</span>
            </div>
            <div className={styles['container05']}>
              <span className={styles['text016']}>
                <span>â 1 photographer + 1 cameraman</span>
              </span>
              <span className={styles['text018']}>
                <span>â 500 photos</span>
              </span>
              <span className={styles['text020']}>
                <span>â 60 min FULL HD video</span>
              </span>
              <span className={styles['text022']}>
                <span>â Online access</span>
              </span>
              <span className={styles['text024']}>
                <span>â Wedding Trailer</span>
              </span>
            </div>
          </div>
          <div className={styles['PricingCard1']}>
            <span className={styles['text026']}>standard</span>
            <div className={styles['container06']}>
              <div className={styles['container07']}>
                <span className={styles['text027']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span className={styles['text030']}>700</span>
              </div>
            </div>
            <div className={styles['container08']}>
              <div className={styles['container09']}>
                <span className={styles['text031']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span className={styles['text033']}>
                  <span>â 600 photos</span>
                </span>
                <span className={styles['text035']}>
                  <span>â 120 min FULL HD video</span>
                </span>
                <span className={styles['text037']}>
                  <span>â Drone filming</span>
                </span>
                <span className={styles['text039']}>
                  <span>â Online access</span>
                </span>
                <span className={styles['text041']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span className={styles['text043']}>
                  <span>â 1 Album 20x30 cm</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles['PricingCard2']}>
            <span className={styles['text045']}>PRO</span>
            <div className={styles['container10']}>
              <div className={styles['container11']}>
                <span className={styles['text046']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span className={styles['text049']}>900</span>
              </div>
            </div>
            <div className={styles['container12']}>
              <div className={styles['container13']}>
                <span className={styles['text050']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span className={styles['text052']}>
                  <span>â 800 photos</span>
                </span>
                <span className={styles['text054']}>
                  <span>â 150 min FULL HD video</span>
                </span>
                <span className={styles['text056']}>
                  <span>â Drone filming</span>
                </span>
                <span className={styles['text058']}>
                  <span>â Online access</span>
                </span>
                <span className={styles['text060']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span className={styles['text062']}>
                  <span>â 1 Album 20x30 cm</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Pricing-Line-2']}>
        <div className={styles['container14']}>
          <div className={styles['PricingCard3']}>
            <span className={styles['text064']}>PREMIUM</span>
            <div className={styles['container15']}>
              <div className={styles['container16']}>
                <span className={styles['text065']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span className={styles['text068']}>1000</span>
              </div>
            </div>
            <div className={styles['container17']}>
              <div className={styles['container18']}>
                <span className={styles['text069']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span className={styles['text071']}>
                  <span>â 1000 photos</span>
                </span>
                <span className={styles['text073']}>
                  <span>â 120 min 4K UHD video</span>
                </span>
                <span className={styles['text075']}>
                  <span>â Drone filming</span>
                </span>
                <span className={styles['text077']}>
                  <span>â Online access</span>
                </span>
                <span className={styles['text079']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span className={styles['text081']}>
                  <span>â 1 Album 30x40 cm</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles['PricingCard4']}>
            <span className={styles['text083']}>ULTRA</span>
            <div className={styles['container19']}>
              <div className={styles['container20']}>
                <span className={styles['text084']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span className={styles['text087']}>1200</span>
              </div>
            </div>
            <div className={styles['container21']}>
              <div className={styles['container22']}>
                <span className={styles['text088']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span className={styles['text090']}>
                  <span>â 1200 photos</span>
                </span>
                <span className={styles['text092']}>
                  <span>â 120 min 4K UHD video</span>
                </span>
                <span className={styles['text094']}>
                  <span>â Drone filming</span>
                </span>
                <span className={styles['text096']}>
                  <span>â Online access</span>
                </span>
                <span className={styles['text098']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span className={styles['text100']}>
                  <span>â 1 Album 20x30 cm + 1 Album 30x40 cm</span>
                </span>
                <span className={styles['text102']}>
                  <span>â Trash the Dress</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles['PricingCard5']}>
            <span className={styles['text104']}>EXCLUSIVE</span>
            <div className={styles['container23']}>
              <div className={styles['container24']}>
                <span className={styles['text105']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span className={styles['text108']}>1500</span>
              </div>
            </div>
            <div className={styles['container25']}>
              <div className={styles['container26']}>
                <span className={styles['text109']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span className={styles['text111']}>
                  <span>â 1500 photos</span>
                </span>
                <span className={styles['text113']}>
                  <span>â 150 min 4K UHD video</span>
                </span>
                <span className={styles['text115']}>
                  <span>â Drone filming</span>
                </span>
                <span className={styles['text117']}>
                  <span>â Online access</span>
                </span>
                <span className={styles['text119']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span className={styles['text121']}>
                  <span>â 2 Album 20x30 cm + 1 Album 30x40 cm</span>
                </span>
                <span className={styles['text123']}>
                  <span>â Trash the Dress</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42895.975145832!2d22.86814350443415!3d47.781478149727384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47380585245d5af9%3A0xf22c5b694689986e!2sGG%20Production!5e0!3m2!1sde!2sro!4v1632994007990!5m2!1sde!2sro"
        className={styles['iframe']}
      ></iframe>
      <div className={styles['container27']}></div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <img
            alt="image"
            src="/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
            image="/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
            className={styles['image2']}
          />
          <div className={styles['Links-container1']}>
            <div className={styles['container28']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link06']} ${projectStyles['thqLink']} `}
              >
                Home
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link07']} ${projectStyles['thqLink']} `}
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link08']} ${projectStyles['thqLink']} `}
              >
                Special deals
              </a>
            </div>
            <div className={styles['container29']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link09']} ${projectStyles['thqLink']} `}
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link10']} ${projectStyles['thqLink']} `}
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link11']} ${projectStyles['thqLink']} `}
              >
                Contact
              </a>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text125']}>
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className={styles['Icons-container']}>
              <a
                href="https://instagram.com/ggproduction.ro"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link12']}
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className={` ${styles['icon']} ${projectStyles['thqLink']} `}
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/GeiGerPhotography"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link13']}
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className={` ${styles['icon2']} ${projectStyles['thqLink']} `}
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCngPhQ3LsD9xLUxxgOUHT6g"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link14']}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className={` ${styles['icon4']} ${projectStyles['thqLink']} `}
                >
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
