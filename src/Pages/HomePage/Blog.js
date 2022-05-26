import React from 'react';

const Blog = () => {
  return (
    <div className="md:min-h-screen">
        <h1 className='text-center font-thin text-5xl my-12 uppercase text-primary'>Blogs</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-6">

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title underline">
              How will you improve the performance of a React Application?
            </h2>
            <ul className="mt-5">
              <li>Keeping component state local where necessary.</li>
              <li>Lazy loading images in React.</li>
              <li>
                Memoizing React components to prevent unnecessary re-renders
              </li>
              <li>Code-splitting in React using dynamic import</li>
              <li>Windowing or list virtualization in React.</li>
            </ul>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title underline">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <ul className="mt-5">
              <li>
                Local State! <br />
                Local state is data we manage in one or another component.
              </li>
              <li>
                Global State <br />
                Global state is data we manage across multiple components.
              </li>
              <li>
                Server State <br />
                Data that comes from an external server that must be integrated
                with our UI state.
              </li>
              <li>
                URL State <br />
                Data that exists on our URLs, including the pathname and query
                parameters.
              </li>
            </ul>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title underline">
              how does prototype inheritance work?
            </h2>
            <p>
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype.
            </p>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title underline">
              Why we do not set the state directly in React?
            </h2>
            <p>
              One should never update the state directly because of the
              following reasons: If you update it directly, calling the
              setState() afterward may just replace the update you made. When
              you directly update the state, it does not change this.
            </p>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title underline">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit tests are typically automated tests written and run by
              software developers to ensure that a section of an application
              (known as the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
