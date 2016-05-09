function ReturnFileName (name) {
    switch (name) {
        case "Ripley's Aquarium":
            return 'aquarium.png';
            break;
        case 'Art Gallery of Ontario':
            return 'artgalleryontario.jpg';
            break;
        case 'CN Tower':
            return 'cntower.jpg';
            break;
        case 'Royal Ontario Museum':
            return 'rom.jpg';
            break;
        case 'City Hall':
            return 'torontocityhall.jpg';
            break;
        case 'Eaton Center':
            return 'torontoeatoncentre.jpg';
            break;
        case 'Toronto Zoo':
            return 'torontozoo.jpg';
            break;
        case 'Yorkdale Mall':
            return 'yorkdalemall.jpg';
            break;
        default:
            return 'no_image.jpg';
            break;

    }
};

module.exports = ReturnFileName;