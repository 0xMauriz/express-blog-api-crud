function noEndpointError(req, res, next) {

    res.status(404)
    res.json({
        error: "Not Found",
        message: "La pagina non è stata trovata"
    });
};

module.exports = noEndpointError;