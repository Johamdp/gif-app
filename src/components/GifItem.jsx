import PropTypes from 'prop-types';

export const GifItem = ({title, url}) => {

    const handleClick = async () => {
        try {
            const response = await fetch(url);
            const file = await response.blob();
            const urlFile = window.URL.createObjectURL(file);
            const element = document.createElement('a');
            element.style.display = 'none';
            element.href = urlFile;
            element.download = `${title}.gif`
            document.body.appendChild(element);
            element.click();
            window.URL.revokeObjectURL(urlFile);
            element.remove();
        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <div className="card">
            <p data-testid='test-title'>{title}</p>
            <img src ={url} alt ="gif"/>
            <button className="download" data-testid="Button Dow" onClick={handleClick}>Descargar</button>
        </div>
    )
}   

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

GifItem.defaultProps ={
    title:'Gif',
    url:'...'
}