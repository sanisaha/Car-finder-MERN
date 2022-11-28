import React from 'react';
import Header from '../Shared/Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-5'>
                <div className="container bg-purple-400 border border-dark px-5">
                    <div>
                        <h2 className="text-white font-bold my-4 py-4 text-3xl">Important questions and their answers regarding Reactjs and backend database</h2>
                    </div>
                    <div>
                        <div className="border border-dark text-white p-4">
                            <div>
                                <h3 className="font-bold text-xl">1.What are the different ways to manage a state in a React application?</h3>
                                <p className='text-lg'>There are four main types of state you need to properly manage in your React apps:</p>
                                <ul>
                                    <li><p>Local state</p></li>
                                    <li><p>Global state</p></li>
                                    <li><p>Server state</p></li>
                                    <li><p>URL state</p></li>
                                </ul>
                                <ul>
                                    <li><p className='text-lg'>local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p></li>
                                    <li><p className='text-lg'>A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p></li>
                                    <li><p className='text-lg'> There are tools such as SWR and React Query that make managing server state much easier.</p></li>
                                    <li><p className='text-lg'></p>In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border border-dark text-white p-4">
                            <div>
                                <h3 className="font-bold text-xl">2.How does prototypical inheritance work?</h3>
                                <p className='text-lg'>
                                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__
                                </p>
                            </div>
                        </div>
                        <div className="border border-dark text-white p-4">
                            <div>
                                <h3 className="font-bold text-xl">3.What is a unit test? Why should we write unit tests?</h3>
                                <p className='text-lg'>
                                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                                </p>
                                <p className='text-lg'>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>

                            </div>
                        </div>
                        <div className="border border-dark text-white p-4">
                            <div>
                                <h3 className="font-bold text-xl">3.React vs. Angular vs. Vue?</h3>
                                <p className='text-lg'>
                                    <li><span className='text-lg'>Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming, React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller.Vue.js is a library that allows you to create interactive web interfaces. Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. It uses two-way data bindings to attach the View and the Model. Directives and Filters abstract away the actual DOM operations and output formatting.</span></li>
                                    <li><span className='text-lg'>
                                        <p>Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. The interface element changes as the model’s state changes, which is why two-way data binding is used.</p>
                                        <p>React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. If you change the interface element, the state of the model stays the same.</p>
                                        <p>As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. This implies that all Vue.js templates are fundamentally legal, parsable HTML with a few extra features. Remember this because Vue templates are fundamentally different from string-based templates.</p>
                                    </span></li>

                                </p>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;