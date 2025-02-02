import Image from "next/image"

export default function Home() {
  return (
    <div className="main_body">

      <div className="hero_section">
        <div className="container">
          <div className="hero_container">

            <div className="hero_data">
              <h1>Hi, I am John, <br />Creative Technologist</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="hero_btn">Download Resume</button>
            </div>

            <div className="hero_img">
              <Image src="/hero_image.png" alt="hero image" width={292} height={299}></Image>
            </div>

          </div>
        </div>
      </div>

      <div className="recent_post">
        <div className="container">

          <div className="recent_main">
            <div className="box_top">
              <h3>Recent Post</h3>
              <button className="viewall_btn">View all</button>
            </div>

            <div className="two_cards">
              <div className="card">
                <h2 className="card_heading">Making a design system from scratch</h2>
                <p className="card_date">12 Feb 2020 | Design, Pattern</p>
                <p className="card_para">
                  Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor do
                  amet sint. Velit officia consequat duis enim <br /> velit mollit.
                  Exercitation veniam consequat sunt <br /> nostrud amet.
                </p>
              </div>

              <div className="card">
                <h2 className="card_heading">Making a design system from scratch</h2>
                <p className="card_date">12 Feb 2020 | Design, Pattern</p>
                <p className="card_para">
                  Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor do
                  amet sint. Velit officia consequat duis enim <br />velit mollit.
                  Exercitation veniam consequat sunt <br /> nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="featured_work">
        <div className="container">
          <div className="feature_main">

            <div className="feature_heading">
              <h3>Featured works</h3>
            </div>

            <div className="feature_cards">
            <div className="card1">
              <Image src="/img1.png" alt="image 1" width={246} height={180}></Image>
              <div className="card_content">
                <h2>Designing Dashboards</h2>
                <div className="badge_data">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/>
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br/>
                nostrud amet.</p>
              </div>
            </div>

            <div className="card1">
              <Image src="/img2.png" alt="image 1" width={246} height={180}></Image>
              <div className="card_content">
                <h2>Designing Dashboards</h2>
                <div className="badge_data">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/>
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br/>
                nostrud amet.</p>
              </div>
            </div>

            <div className="card1">
              <Image src="/img3.png" alt="image 1" width={246} height={180}></Image>
              <div className="card_content">
                <h2>Designing Dashboards</h2>
                <div className="badge_data">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/>
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br/>
                nostrud amet.</p>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
