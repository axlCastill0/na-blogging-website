function Home() {
    return (        
        <div className="flex flex-col">
            <h1 className="font-bold text-blue-400 text-9xl">Hello there</h1>      
            <button onClick={() => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')
            }}>click me</button>
        </div>        
    )
}

export default Home;
