import '../stylesz.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="image-overlay-container">
                <img 
                    src="https://steamuserimages-a.akamaihd.net/ugc/1333579308036338067/F35263F584E1FD9B69990E2E5C53A3707DB3F8F3/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" 
                    alt="Background"
                    className="background-image"
                />
                <div className="text-overlay">
                    <h1>Jacob Garcilazo</h1>
                    <p>A fictional character</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
