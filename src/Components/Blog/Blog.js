import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-l from-sky-400 via-cyan-100  p-5 mt-0">
      {/* <h1>Hello Blog</h1> */}
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What is the purpose of
          <span className="text-red-500"> React Router</span>?
        </h3>
        <p>
          <span className="underline">Ans</span> : Routing is a process in which
          a user is directed to different pages based on their action or
          request. ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route. React Router is a
          standard library system built on top of the React and used to create
          routing in the React application using React Router Package. It
          provides the synchronous URL on the browser with data that will be
          displayed on the web page. It maintains the standard structure and
          behavior of the application and mainly used for developing single page
          web applications. ReactJS Router is mainly used for developing Single
          Page Web Applications. React Router is used to define multiple routes
          in the application. When a user types a specific URL into the browser,
          and if this URL path matches any 'route' inside the router file, the
          user will be redirected to that particular route.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : How does
          <span className="text-red-500"> Context API</span> work ?
        </h3>
        <p>
          <span className="underline">Ans</span> : The React Context API is a
          way for a React app to effectively produce global variables that can
          be passed around. This is the alternative to "prop drilling" or moving
          props from grandparent to child to parent, and so on. Context is also
          touted as an easier, lighter approach to state management using Redux.
          Context API is a (kind of) new feature added in version 16.3 of React
          that allows one to share state across the entire app (or part of it)
          lightly and with ease.React.createContext() is all you need. It
          returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state. More information can be found on React's documentation
          page.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What are the usage of
          <span className="text-red-500"> useRef Hook </span>?
        </h3>
        <p>
          <span className="underline">Ans</span> : The useRef Hook allows you to
          persist values between renders. It can be used to store a mutable
          value that does not cause a re-render when updated. It can be used to
          access a DOM element directly.useRef is one of the standard hooks
          provided by React. It will return an object that you can use during
          the whole lifecycle of the component. The main use case for the useRef
          hook is to access a DOM child directly. I’ll show exactly how to do
          that in another section. Although accessing the DOM is the main use
          case, it doesn’t mean it’s the only one! useRef can also be very
          useful to hold a mutable value across different renders of your
          component. For example, it’s often quite handy when using external
          libraries that weren’t made with React in mind.
        </p>
      </div>
    </div>
  );
};

export default Blog;
