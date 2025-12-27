import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <div className=' h-[80vh] flex justify-between '>
       <Sidebar />
       <Container />
       <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Home
