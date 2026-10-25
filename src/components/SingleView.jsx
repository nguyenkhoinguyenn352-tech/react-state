import PropTypes from 'prop-types';

const SingleView = (props) => {
    const { item, setSelectedItem } = props;
    return (
        <dialog open={item ? true : false}>
            {item && (
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.media_type.includes('video') ? (
                        <video controls width="100%">
                            <source src={item.filename} type={item.media_type} />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={item.filename} alt={item.title} style={{ width: '100%' }} />
                    )}
                    <br />
                    <button onClick={() => setSelectedItem(null)}>Close</button>
                </div>
            )}
        </dialog>
    );
};

SingleView.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        filename: PropTypes.string.isRequired,
        media_type: PropTypes.string.isRequired,
    }),
    setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;

