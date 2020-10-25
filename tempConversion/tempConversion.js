const ftoc = (temp) => Math.round((temp - 32) * (5 / 9) * 10) / 10;

const ctof = (temp) => Math.round((temp * (9 / 5) + 32) * 10) / 10;

module.exports = {
    ftoc,
    ctof,
};