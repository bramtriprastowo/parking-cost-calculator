//Unit test untuk mengetes harga sesuai durasi parkir
const calculatePrice = require("../src/helper/price");

//Pada fungsi calculate price, parameter pertama adalah tipe kendaraan (1 => mobil, 2 => motor)
//dan parameter kedua adalah durasi parkir (dalam detik)

// Test untuk mobil
test('1. test for type: mobil, duration 1 minute (expected price = 0)', () => {
    expect(calculatePrice(1, 60)).toBe(0)
})

test('2. test for type: mobil, duration 1 minute 1 second (expected price = 5000)', () => {
    expect(calculatePrice(1, 61)).toBe(5000)
})

test('3. test for type: mobil, duration 1 hour 1 minute (expected price = 5000)', () => {
    expect(calculatePrice(1, 3660)).toBe(5000)
})

test('4. test for type: mobil, duration 1 hour 1 minute 1 second (expected price = 10000)', () => {
    expect(calculatePrice(1, 3661)).toBe(10000)
})

test('5. test for type: mobil, duration 23 hours 1 minute 1 second (expected price = 120000)', () => {
    expect(calculatePrice(1, 82861)).toBe(120000)
})

test('6. test for type: mobil, duration 1 day (expected price = 80000)', () => {
    expect(calculatePrice(1, 86400)).toBe(80000)
})

test('7. test for type: mobil, duration 1 day 6 hours 1 minute (expected price = 110000)', () => {
    expect(calculatePrice(1, 108060)).toBe(110000)
})

test('8. test for type: mobil, duration 1 day 6 hours 1 minute 1 second (expected price = 115000)', () => {
    expect(calculatePrice(1, 108061)).toBe(115000)
})

test('9. test for type: mobil, duration 2 day 6 hours 1 minute 1 second (expected price = 195000)', () => {
    expect(calculatePrice(1, 194461)).toBe(195000)
})


// Test untuk motor
test('10. test for type: motor, duration 1 minute (expected price = 0)', () => {
    expect(calculatePrice(2, 60)).toBe(0)
})

test('11. test for type: motor, duration 1 minute 1 second (expected price = 2000)', () => {
    expect(calculatePrice(2, 61)).toBe(2000)
})

test('12. test for type: motor, duration 1 hour 1 minute (expected price = 2000)', () => {
    expect(calculatePrice(2, 3660)).toBe(2000)
})

test('13. test for type: motor, duration 1 hour 1 minute 1 second (expected price = 4000)', () => {
    expect(calculatePrice(2, 3661)).toBe(4000)
})

test('14. test for type: motor, duration 23 hours 1 minute 1 second (expected price = 48000)', () => {
    expect(calculatePrice(2, 82861)).toBe(48000)
})

test('15. test for type: motor, duration 1 day (expected price = 40000)', () => {
    expect(calculatePrice(2, 86400)).toBe(40000)
})

test('16. test for type: motor, duration 1 day 6 hours 1 minute (expected price = 52000)', () => {
    expect(calculatePrice(2, 108060)).toBe(52000)
})

test('17. test for type: motor, duration 1 day 6 hours 1 minute 1 second (expected price = 54000)', () => {
    expect(calculatePrice(2, 108061)).toBe(54000)
})

test('18. test for type: motor, duration 2 day 6 hours 1 minute 1 second (expected price = 114000)', () => {
    expect(calculatePrice(2, 194461)).toBe(94000)
})