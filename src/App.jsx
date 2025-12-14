import {useState ,useEffect} from 'react';
import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import Pagination from './components/Pagination.jsx';
import { useDebounce } from 'react-use';
import { getTrendingMovies, updateSearchCount } from '../appwrite.js';


const API_BASE_URL ='https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMBD_API_KEY;
const API_OPTIONS ={
    method : 'GET',
    headers :{
        accept : 'application/json',
        Authorization:`Bearer ${API_KEY}`

    }
}
 
const App=()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [trendingMovies, settrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debounceSearchTerm, setdebounceSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    //Debounce the search to avoid having many api's calles for each search term character 
    //by waiting for the user to stop typing for some time
    useDebounce(()=>setdebounceSearchTerm(searchTerm),700,[searchTerm]);

   

    const fetchMovies =async (query,pageNum) =>{
        setIsLoading(true);
        setErrorMessage("");


        try{
            const endPoint = query
                    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${pageNum}`
                    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${pageNum}`;


            const response = await fetch(endPoint,API_OPTIONS);
            
            if(!response.ok)
                throw new Error("failed to fetch movies");
           
            const data = await response.json();
            
            if(data.response ==='False'){
                setErrorMessage(data.Error || 'Falied to fetch movies');
                setMovieList([]);
                return;
            }
                
            setMovieList(data.results || []);
            setTotalPages(data.total_pages || 1);
            

            if(query && data.results.length > 0){
                await updateSearchCount(query,data.results[0]);
            }
        }
        catch(error){
            console.log(`Error Fetching Movies ${error}`);
            setErrorMessage('Error fetching movies, please try again later');
            setMovieList([]);
            setTotalPages(1);
        }
        finally{
            setIsLoading(false);
        }
    }

    const loadTrendingMovies = async() =>{
        try{
            const movies = await getTrendingMovies();
            settrendingMovies(movies);
        }
        catch(error){
            console.error(`Error fetching trending movies: ${error}`);
        }
    }



     //this use effect will fetch be excuted based on the dependency [debounceSerachTerm]
    //each time the debounceing happend
    //this use effect will handle reetting the page number when debounceserachtrem is set

    useEffect(() => {
        fetchMovies(debounceSearchTerm,page);
        window.scrollTo({top: 0, behavior:'smooth'});
        }, [debounceSearchTerm, page]);


    //this use effect will fetch the treding movies on at the start of the website because it does not has
    // any dependency []
    useEffect(()=>{
        loadTrendingMovies();
    },[])

   useEffect(()=>{
    setPage(1);
   },[debounceSearchTerm])
    


    return(
        <main>
            <div className='pattern'/>
            <div className='wrapper'>
                <header>
                    <img src="./hero.jpg" alt="Hero panner" />
                    <h1><span className='text-gradient'>Find Movies</span> That you will Enjoy Without the Hassle</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>
                
                {trendingMovies.length >0&&(
                    <section className='trending movies'>
                        <h2>Trending Movies 🔥</h2>
                        <ul>
                            {trendingMovies.map((movie, index)=>(
                            <li key={movie.$id} >
                                <p>{index +1}</p>
                                <img src={movie.poster_url} alt="poster image" />

                            </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className='all-movies'>

                    <h2>Your next movie night starts here</h2>
                    

                    {isLoading ?(
                        <Spinner />
                    ) : errorMessage?(
                        <p className='text-red-500'>{errorMessage}</p>
                    ):(
                        <div>

                        <ul>
                            {movieList.map((movie)=>(
                            <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </ul>
                            
                            <Pagination 
                             currentPage={page}
                             totalPages={totalPages}
                             onPageChange={(newPage) =>{
                                if(newPage >= 1 && newPage <= totalPages)
                                {
                                    setPage(newPage);
                                }
                            }}

                            />

                        </div>
                        
                    )}

                </section>

                <div>
                    <Footer/>
                </div>

            </div>
        </main>
    )
}

export default App;