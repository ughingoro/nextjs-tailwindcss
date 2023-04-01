    import React from 'react';
    import Link from 'next/link';

    const BlogGrid = () => {
      return (
        <div className='grid grid-cols-3 gap-x-8 gap-y-8 p-8'>
          
          <div className="card">  
            <img src="https://picsum.photos/400/300" alt="landscape image" />
            <div>
              <h1> <strong> Heading </strong> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic, deleniti odit rerum ex exercitationem assumenda quis ut quas esse neque a vero placeat. Quis mollitia reprehenderit quas deserunt laboriosam!</p>
              <Link className='link' href={"#"}>Read More</Link>
            </div>
          </div>

          
          <div className="card">  
            <img src="https://picsum.photos/400/300" alt="landscape image" />
            <div>
              <h1> <strong> Heading </strong> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic, deleniti odit rerum ex exercitationem assumenda quis ut quas esse neque a vero placeat. Quis mollitia reprehenderit quas deserunt laboriosam!</p>
              <Link className='link' href={"#"}>Read More</Link>
            </div>
          </div>

          
          <div className="card">  
            <img src="https://picsum.photos/400/300" alt="landscape image" />
            <div>
              <h1> <strong> Heading </strong> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic, deleniti odit rerum ex exercitationem assumenda quis ut quas esse neque a vero placeat. Quis mollitia reprehenderit quas deserunt laboriosam!</p>
              <Link className='link' href={"#"}>Read More</Link>
            </div>
          </div>

          <div className="card">  
            <img src="https://picsum.photos/400/300" alt="landscape image" />
            <div>
              <h1> <strong> Heading </strong> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic, deleniti odit rerum ex exercitationem assumenda quis ut quas esse neque a vero placeat. Quis mollitia reprehenderit quas deserunt laboriosam!</p>
              <Link className='link' href={"#"}>Read More</Link>
            </div>
          </div>

          
          <div className="card">  
            <img src="https://picsum.photos/400/300" alt="landscape image" />
            <div>
              <h1> <strong> Heading </strong> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic, deleniti odit rerum ex exercitationem assumenda quis ut quas esse neque a vero placeat. Quis mollitia reprehenderit quas deserunt laboriosam!</p>
              <Link className='link' href={"#"}>Read More</Link>
            </div>
          </div>

          
          <div className="card">  
            <img src="https://picsum.photos/400/300" alt="landscape image" />
            <div>
              <h1> <strong> Heading </strong> </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque hic, deleniti odit rerum ex exercitationem assumenda quis ut quas esse neque a vero placeat. Quis mollitia reprehenderit quas deserunt laboriosam!</p>
              <Link className='link' href={"#"}>Read More</Link>
            </div>
          </div>

        </div>
      )
    }
    
    export default BlogGrid
    