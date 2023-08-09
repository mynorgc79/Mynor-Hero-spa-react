export const SearchPage = () => {
    return (
      
      <>
      <h1>search</h1>
      <hr />
      <div className="row">

    
      <div className="col-5">
      <h4>Searching</h4>
      <hr />
        <form>
          <input 
            type="text"
            placeholder="search a hero" 
            className="form-control"
            name = "searchTxt"
            autoComplete="off"
            
            />
            <button type= "submit" className="btn btn-outline-primary mt-1">
              search
              </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />

        <div className="alert alert-primary">
          search a hero
        </div>

        <div className="alert bg-danger">
          no hero with <b>ABC</b>
        </div>
          {/* <HeroCard /> */}
          
      </div>
      </div>
     
      </>
    )
  }

  
  