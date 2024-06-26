import React,{ useState } from 'react'

import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import Recently from '../recentlyView/Recently';
import Movieinfo from '../movieInfo/Movieinfo'

export default function Home() {
    const [showSearchResult, setShowSearchResult] = useState(false)

    const handleSearch = () => {
        setShowSearchResult(true);
    };

  return (
    <div>
        <div className='main_all'>
            <Navbar onSearch={handleSearch} />
            {showSearchResult ?
            (<Movieinfo />

            ) : (
            <>
                <Header />
                <Recently />
                <Main />
                <Footer />
            </>
            )}
        </div>
    </div>
  )
}
