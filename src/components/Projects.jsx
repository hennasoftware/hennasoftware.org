import { fetchOrgRepos } from '../services/githubAPI.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const data = await fetchOrgRepos();
      setRepos(data);
    }

    getRepos();
    console.log(repos);
  }, []);

  return (
    <>
      <section id={'projects'} className={'py-20 text-center'}>
        <div className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <h3 className={'text-3xl sm:text-4xl'}>Projects That Matter</h3>

          <div className={'pt-20'}>
            <Swiper loop={true} modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={20}
                    slidesPerView={1} breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }} className="max-w-6xl mx-auto">

              {repos.map((repo) => (
                <SwiperSlide key={repo.id} className="bg-gray-800 p-4 rounded-lg mb-20 text-left space-y-4">
                  <img src={`https://opengraph.githubassets.com/1/henna-software/${repo.name}`}
                       alt={`Preview of ${repo.name}`} className="w-full h-48 object-cover rounded-lg mb-4" />

                  <h3 className="text-xl font-semibold">{repo.name}</h3>

                  <p
                    className="text-gray-400 text-sm h-16 line-clamp-3 overflow-hidden">{repo.description || 'No description provided.'}</p>

                  <div className={'flex flex-wrap w-full items-center gap-2 text-center'}>
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
                       className="min-w-40 px-4 py-2 bg-blue-500 rounded-sm transition-all hover:bg-blue-400 md:mx-0 sm:w-fit md:min-w-auto">
                      <i className="uil uil-arrow-up-right"></i> Live Demo
                    </a>

                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                       className="min-w-40 px-4 py-2 bg-blue-500 rounded-sm transition-all hover:bg-blue-400 md:mx-0 sm:w-fit md:min-w-auto">
                      <i className="uil uil-github"></i> View Code
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
