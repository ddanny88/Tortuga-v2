import React from 'react';


/**
 * display all of the products in database.
 * 
 * when  one of the items is clicked, show itemDetails page. 
 * component will need to mount with products in state. 
 * 
 * extract the name from 
 */

const Shop = () => {
    return (
        <div>
            shop
        </div>
    )
}

export default Shop;






// render() {

//     const getDog = routeProps => {
//       let name = routeProps.match.params.name;
//       let currentDog = this.props.dogs.find( dog => 
//         dog.name.toLowerCase() === name.toLowerCase()  
//       );
//       return <Detail {...routeProps} dog={currentDog}/>
//     }


//     return (
//       <div className="App">
//           <Switch>
//             <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs}/>} />
//             <Route exact path="/dogs/:name" render={getDog} />
//           </Switch>
//       </div>
//     );
//   }
// }