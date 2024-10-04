import Users from '../models/Users.js';
import utils from '../utils/utils.js';

export default {
    async registration(req, res) {
        try {
            const {
                firstName,
                lastName,
                number,
                password,
            } = req.body

            const [user, faild] = await Users.findOrCreate({
                where: { number },
                defaults: {
                    firstName,
                    lastName,
                    number,
                    password,
                },
            });

            if (!faild) {
                res.status(409).json({
                    message: 'Number already exists!'
                });
                return;
            }

            res.status(201).json({
                message: 'User created successfully',
                user
            });

        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                error: e.message,
            });
        }
    },

    async login(req, res) {
        try {
            const { number, password } = req.body;

            const user = await Users.findOne({
                where: { number }
            });

            const hashPassword = Users.hash(password);

            if (!user || hashPassword !== user.getDataValue('password')) {
                res.status(401).json({
                    message: 'Invalid number or password',
                });
                return;
            }

            const payload = {
                id: user.id,
                number: user.number,
            };

            const expiresIn = {
                expiresIn: '365d'
            };

            const token = utils.createToken(payload, expiresIn);

            if (user.role === 'admin') {
                res.status(200).json({
                    message: 'Login successfully',
                    token,
                    isAdmin: true
                });
                return;
            }

            res.status(200).json({
                message: 'Login successfully',
                token,
                isAdmin: false
            });

        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                error: e.message,
            });
        }
    },
}