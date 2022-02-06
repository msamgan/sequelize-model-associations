const methods = require("../helpers/methods")
const db = require("../models")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.index = async (req, res) => {
    let posts = await db.Post.findAll({
        where: {
            userId: 1
        },
        include: [
            {
                model: db.User
            }
        ]
    }).catch((err) => {
        console.log(err.message)
    })

    res.send(methods.successResponse("List of articles for user 1", posts))
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.indexPost = async (req, res) => {
    res.send(
        methods.successResponse(
            "Express JS API Boiler Plate post api working like a charm...",
            {
                data: "here comes you payload...",
                request: req.body
            }
        )
    )
}
