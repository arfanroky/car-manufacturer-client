import React from 'react';
import './MyPortfolio.css';

const MyPortfolio = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        {/* Perfume stores */}
        <div className="rounded shadow-2xl p-4 relative md:mx-0 mx-6">
          <div className="scrolling-image perfume-stores border-t-2 p-4 shadow-2xl rounded"></div>
          <div>
            <h1 className="mt-5 uppercase text-xl font-normal tracking-widest">
              Perfume Stores{' '}
              <small className="text-secondary font-bold tracking-widest capitalize ">
                ( Warehouse Website )
              </small>
            </h1>
            <p className="py-4 font-normal text-md tracking-wide capitalize mb-12">
              this project is little bit MERN Stack Based project . I Created
              simple CRUD Operation. If a Customer Logged in He can Buy/Manage
              Every product which is he need also can delete the product . in
              home page only show the 6 items if the Customer want to see all
              product then should be click the manageAll button . if they want
              show their favorite perfume in this site they can add this product
              in addnewitem route . for website security purpache I used JWT
              token issue. so no one can buy the product before logged in. Some
              Technology I used For front-end React, Tailwind, Firebase, JWT,
              Etc, For Backend I used Express Js, and MongoDB Database for
              storing the all Important Data.
            </p>
            <a
              className="btn btn-primary absolute bottom-6  right-6 px-12 text-white"
              href="https://perfume-stores-site.web.app/"
            >
              Live Site
            </a>
          </div>
        </div>

        {/* Immigration */}
        <div className="rounded shadow-2xl p-4 relative md:mx-0 mx-6">
          <div className="scrolling-image immigration border-t-2 p-4 shadow-2xl rounded"></div>
          <div>
            <h1 className="mt-5 uppercase text-xl font-normal tracking-widest">
              Migrate{' '}
              <small className="text-secondary font-bold tracking-widest capitalize ">
                ( Immigration Visa Consultation )
              </small>
            </h1>
            <p className="py-4 font-normal text-md tracking-wide capitalize mb-12">
              There are few International visa. In this site Giving Visa
              Consultation service who want to need any type of visa like
              Business Visa, Travel Visa, Journalist and Media Visa, Student
              Visa, Nonimmigrant Visa, Job Seeker Visa and also need ligeal
              information which is worldwide true. Migrate Is Your Trusted
              Instructing Center. Migrate has Few coaching Technology used:
              React , Firebase, Bootstrap, login system, no Backend implement
              till now.
            </p>
            <a
              className="btn btn-primary absolute bottom-6  right-6 px-12 text-white"
              href="https://borrow-741c0.web.app/"
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="rounded shadow-2xl p-4 relative md:mx-0 mx-6">
          <div className="scrolling-image convention border-t-2 p-4 shadow-2xl rounded"></div>
          <div>
            <h1 className="mt-5 uppercase text-xl font-normal tracking-widest">
              Convention Center{' '}
              <small className="text-secondary font-bold tracking-widest capitalize ">
                ( Event Management )
              </small>
            </h1>
            <p className="py-4 font-normal text-md tracking-wide capitalize mb-12">
              Event management site for any program wedding , birthday , dj
              party, house party anything else. there are four price plan for
              indivual item . easy to book any option few team member has on
              that site. Technology used : HTML, CSS, Bootstrap , this project
              is giving you quite UI/UX design.
            </p>
            <a
              className="btn btn-primary absolute bottom-6  right-6 px-12 text-white"
              href="https://perfume-stores-site.web.app/"
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
