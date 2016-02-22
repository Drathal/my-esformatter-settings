/*
  Atom plugins:
	js / jsx :
	esformatter

  other:
	atom-beautify
*/

import http from 'http';
import React from 'react';

// sample comment
const addItemActionCreator = (item /*, unused */ ) => {
    return {type: 'ADD_ITEM', item};
};

var foo = [];
var someObject = {property: false};
someObject.property = true;

if (someObject) {
    console.log(someObject);
}

const server = http.createServer((req, res) => {

    if (req.url.match('favicon.ico')) {
        // test comment
        return res.end();
    }

    res.write(`<!DOCTYPE html>
        <html>
            <head>
                <meta charSet="utf-8" />
            </head>
            <body>
                <div id="app-wrapper"></div>
                <script type="text/javascript" src="http://localhost:1000/bundle.js"></script>
            </body>
        </html>`);

    res.end();
});

export default server

var Hello = React.createClass({
    displayName: 'Hello',
    render: function() {
        return <div>
                   Hello
                   { this.props.message }
               </div>
    }
});

export function test() {
    return class Home extends React.Component {

        displayName: 'Home'

        render() {
            return (
                <div>
                    <h1 test={ this.props.test } test2={ this.props.test2 }>Provider and connect example</h1>
                </div>
            )
        }
    }
}

export function promiseMiddleware() {
    return (next) => (action) => {
        const {promise, types, ...rest} = action;

        if (!promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({...rest, type: REQUEST});

        return promise().then(
            (result) => {
                next({...rest, result, type: SUCCESS});
            },
            (error) => {
                next({...rest, error, type: FAILURE});
            }
        );
    };
}
