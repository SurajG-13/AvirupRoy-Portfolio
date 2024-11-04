import React from 'react';
import { motion } from 'framer-motion';
import Avatar from '../../utilities/Avatar';
import ScreenFitText from '../../utilities/ScreenFitText';

function AboutIntro() {
  return (
    <>
      <main className="text-primaryWhite mx-2 my-12 md:mx-24 md:mb-20">
        <section className="relative mb-12 mt-24 h-[3vh] w-[3vw] border-4 border-red-500">
          <div className="absolute flex h-full w-full items-end justify-end px-28 py-10 md:px-[32rem]">
            <p className="h-fit w-fit -rotate-12 rounded-3xl bg-[#F77FBE] px-4 py-2 text-sm text-black md:text-base lg:px-8 lg:py-4">
              Open to Work
            </p>
          </div>
          <div className="flex h-full w-full items-center justify-center border">
            About
          </div>
        </section>

        <section className="flex h-full w-full flex-col md:grid md:grid-cols-12">
          <div className="col-span-2 flex items-center justify-center">
            <Avatar
              imageUrl="images/Avatar/SURAJ.jpg"
              name="Suraj Ghosh"
              alt="Suraj Ghosh"
            />
          </div>

          <div className="col-span-8 py-4 md:py-0">
            <p className="text-primaryWhite mb-1 font-sans text-3xl">
              A few words about Me
            </p>
            <br />
            <p className="text-primaryWhite m-1 font-sans">
              I am Suraj Ghosh, a fourth-year Information Technology
              undergraduate with a solid foundation in web development, software
              development, object-oriented programming, and database management
              systems. Throughout my academic career, I have engaged in various
              projects that enhanced my problem-solving skills and allowed me to
              apply theoretical concepts to practical situations.
            </p>
            <br />
            <p className="text-primaryWhite font-sans">
              When I'm not doing all of that, I like to refresh by watching
              movies, listening to music, catching a football game, or scrolling
              through Reddit.
            </p>
            <br />
            <a
              href="/Suraj_CV.pdf"
              download
              className="inline-flex gap-2 overflow-hidden font-sans text-lg text-green-500 hover:text-green-500 hover:underline"
              aria-label="Download my resume"
            >
              Download My Resume
            </a>
          </div>

          <div className="col-span-2 hidden justify-center md:flex">
            <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-2">
              <div>
                <h3 className="text-primaryWhite mb-4 text-lg font-semibold">
                  Social
                </h3>
                <div className="flex flex-col space-y-2">
                  {['GitHub', 'LinkedIn', 'X.com'].map((contact, idx) => {
                    const links = [
                      'https://github.com/SurajG-13',
                      'https://www.linkedin.com/in/suraj13/',
                      'https://x.com/Suraj_Culer',
                    ];
                    return (
                      <motion.a
                        key={contact}
                        href={links[idx]}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-dullWhite hover:text-primaryWhite hover:underline"
                        aria-label={`Visit my ${contact}`}
                      >
                        {contact}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information Column */}
              <div>
                <h3 className="text-primaryWhite mb-4 text-lg font-semibold">
                  Contact
                </h3>
                <div className="flex flex-col space-y-2">
                  {['Email'].map((contact, idx) => {
                    const links = ['mailto:suraj.coder13@gmail.com'];
                    return (
                      <motion.a
                        key={contact}
                        href={links[idx]}
                        whileHover={{ scale: 1.1 }}
                        className="text-dullWhite hover:text-primaryWhite hover:underline"
                        aria-label={`Email me at ${links[idx]}`}
                      >
                        {contact}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutIntro;
