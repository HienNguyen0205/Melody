function Load() {
    return (
        <div id="preloader">
            <img src={require('./img/loading.gif')} alt=""/>
            <div id="loading-mes">Loading...</div>
        </div>
    )
}

export default Load