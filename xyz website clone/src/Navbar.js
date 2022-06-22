import React from 'react'
import img from './xyz.png'
import img2 from './icon.png'

function Navbar() {
    let mystyle = {
        backgroundColor: 'purple',
        color: 'white',
        flex: '1',
        
    }

    let buttonStyle = {
      border: '0',
      margin: '0',
      backgroundColor: 'purple',
      color: 'white'
    }
  return (
    <div>
          <div  style={mystyle} className='container-fluid'>

          

              <nav class="navbar bg-purple">
                <div class="container-fluid">
                  <button style = {buttonStyle}><img src={img} alt="" height={40}/></button>
                  <div class="d-flex ">
                      <div class="dropdown" >
                        <button style={buttonStyle} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          About
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="/">Action</a></li>
                          <li><a class="dropdown-item" href="/">Another action</a></li>
                          <li><a class="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                      </div>

                      <div class="dropdown" >
                        <button style={buttonStyle} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Resources
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="/">Action</a></li>
                          <li><a class="dropdown-item" href="/">Another action</a></li>
                          <li><a class="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                      </div>

                      <button style={buttonStyle}>Blog</button>

                      <button style={buttonStyle}>Contact</button>


                      <div class="dropdown" >
                        <button style={buttonStyle} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Domains
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="/">Action</a></li>
                          <li><a class="dropdown-item" href="/">Another action</a></li>
                          <li><a class="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                      </div>

                      <button className='btn btn-success '>Register</button>
                    
                  </div>

                  
                </div>
              </nav>

          </div>

          <div style={{backgroundColor: 'darkturquoise'}} >
            <nav >
              <div class="container-fluid">
                <img src = {img2} alt="" style={{backgroundColor: 'darkturquoise', border: '0', margin: '0'}} height='30'/>
              <a href="/" className='hover:underline text-green-300 
                        hover:text-green-800 
                        visited:text-green-700'>XYZ Registry Domains Report - May 2022</a>
                
              </div>
            </nav>
          </div>    

        <div>
          <h1 align='center'>For every website, everywhere</h1>
        </div>



        <div  style={mystyle} className='container-fluid' >
            <form class="row g-30 d-flex p-5 justify-content-center " >
              <div class="col-auto d-flex ">
                <label for="inputPassword2" class="visually-hidden ">Enter domain you watn</label>
                <input type="password" class="form-control " id="inputPassword2" placeholder="Domain"/>
              </div>
              <div class="col-auto d-flex ">
                <button type="submit" class="btn btn-primary ">Register</button>
              </div>
              
          </form>
          <div className='d-flex justify-content-center'>
            asd
          </div>
        </div>

        
    </div>
    
    
    
  )
}

export default Navbar