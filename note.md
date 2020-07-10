
How everthing  flows in this app
 
/*
 so this is what is first presented to us. 
 bandscontainer which includes the BandInput components... Which renders a forms
   Then Includes the "states, and How the forms should be handles etc. and "
   And onces the New Band is Created, it is added to the store.




   Then we have the ListBAnd component which is present on the BandsContainer as well. 
   but has no access to the store,,,, So for use to get the informations that we need, we 
   Use props to access the informations as needed. 


   Also, we use the mapStateToProps  so we can "coveret that states into a prop"
   Also, we have that MapDispatchTo Props, which dispatch that ADD_BAND actions for our Reducer to use
   and take the needed steps.. so add the newly created Band to Store.

   State it the current mode somethings is .
    Store. is the collection of where everything is , both newly created and Old
*/