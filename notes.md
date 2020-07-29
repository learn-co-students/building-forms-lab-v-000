a) write `BandsContainer` component.
    1.  connection to your redux store
    1b. child of the App component
  * how to connect to my redux store?





    2. Should be set up && available in `BandsContainer` to pass down
        to other components
      - If want value in redux
      - any actions want to dispatch





b) write `BandInput`
1. parent: `BandsContainer`
   child:  `BandInput`






2. form
  - text input
  - submit button

3. update *component's* state
  - when user types a new character in the input(this is
    stored as: `this.state.name` )

4. update the __Redux__ store's state
  - when user hit submit button

5.  dispatched action: update the __Redux__ store's state
   i) Set up this action in `BandsContainer`
   ii) pass down this dispatched action as this
  - prop `addBand`
    to
  - `BandInput`

c) write `manageBand` reducer
1. respond to: action of ->  **type 'ADD_BAND'**
2. when action(**type 'ADD_BAND'**) is dispatched do the following:
     - attaches a new band

d) WHEN form SUCCESSFULLY:
  -  dispatching actions
  -  adding bands to __Redux__ store
    1. display each ***band name*** from the store
      - ***band name*** listed individually `li` elements
