const User = require('../db/models/User')

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            const regError = Object.keys(error.errors).map(key=>error.errors[key].message)

            req.flash('regError',regError);
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}
