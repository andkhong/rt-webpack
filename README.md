## How To:
1. npm install
2. npm run dev (Develop) 
3. npm run build (Deploy & test prod build)

## Core Technologies
1. Typescript (Awesome Typescript Loader + tsconfig.json)
2. React + ReactDOM
3. React Router v4
4. Styled-Components
  i. Modular Resusable Code
  ii. Can potentially build a monolithic React App without outputing a single CSS file
5. Webpack v3 + Babel
    i. Dynamic Imports = Code-Splitting/Lazy-Loading/Incremental-builds
    ii. Optimized Development builds for increased productivity
    iii. Optimized Production builds for increased performance on all devices

## Statemanagement / Async
1. MobX
   i. Mutable State
   ii. Multiple Stores
   iii. Less Boilerplate than Redux
   iv. Easier for Object Oriented Programming Background
2. Observables

## TBD Technologies
1. Calendar picking / scheduling
2. Date Parsing
  i. Date-FNS
    a. Extension of Javascript Native Date Object
    b. Lighter / Optimized
  ii. Moment 
    a. Heavy
    b. Unoptimized / Inefficient
2. Maps integration
  i. Google Maps
    a. 25,000 FREE calls per day before .50 per 1000 calls after
  ii. Mapbox
    a. 50,000 calls per month with .50 per 1000 calls after
      i. $500 per month + ($0.50 per 1000 calls after)
    b. Easy API integration with all frontend tech
    c. Quick, strong customer/developer support

## Feature Roadmap
1. Authentication Flow
    i. Login
    ii. Registration
    iii. Forgot Password
2. Header
    i. Signout Button
    ii. Navigation Flow
3. Footer
    i. Team
    ii. Credits
4. Main View
  i. All available listings
    a. Filter
5. Routing
    i. Configure Lazy-loading
    ii. Authenticate accessible routes with tokens
6. Booking
    i. Schdule
    ii. Reviews
    iii. Comments
    iv. Location
    v. Security
      a. Checks to see if login/token is currently valid
7. After Staying
    i. Reviews
    ii. Refunds ???
8. Search ???
9. Cancellations ???
    
## React Typescript Restrictions
1. Components can't return string without being wrapped inside of a DOM node. :(