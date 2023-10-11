const handleErrorResponse = (err, res) => {
    const { status, message } = err;

    return res.status(status || 500).json({
        success: false,
        message
    });
};

export default handleErrorResponse;