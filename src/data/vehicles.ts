
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Gas' | 'Electric';
  seats: number;
  images: string[];
  location: 'Cairo' | 'Giza' | 'Alexandria';
  available: boolean;
  rating: number;
  features: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    pricePerDay: 1200,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    images: [
      'https://toyota.com.eg/storage/49821/02.jpg',
      'https://toyota.com.eg/storage/49822/03.jpg',
      'https://toyota.com.eg/storage/49823/04.jpg'
    ],
    location: 'Cairo',
    available: true,
    rating: 4.8,
    features: ['AC', 'Touch Screen', 'Parking Sensors', 'Bluetooth']
  },
  {
    id: '2',
    brand: 'MG',
    model: '5',
    year: 2024,
    pricePerDay: 950,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    images: [
      'https://www.mgmotor.com.eg/wp-content/uploads/2022/06/MG5_ME-1.jpg',
      'https://www.mgmotor.com.eg/wp-content/uploads/2022/06/05e14a7599435b72be969d0858e800ab60dd78ef_1280-2.jpg',
      'https://www.mgmotor.com.eg/wp-content/uploads/2022/06/ISO-FIX-1.jpg'
    ],
    location: 'Giza',
    available: true,
    rating: 4.6,
    features: ['AC', 'Rear Camera', 'Fuel Saving']
  },
  {
    id: '3',
    brand: 'Hyundai',
    model: 'Verna',
    year: 2019,
    pricePerDay: 700,
    transmission: 'Manual',
    fuelType: 'Gas',
    seats: 5,
    images: [
      'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Verna/Highlights/abyss-black_5.png',
      'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Verna/Interior/verna-interior-dashboard.jpg',
      'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Verna/Interior/leatherette-seat-upholstery.jpg'
    ],
    location: 'Cairo',
    available: true,
    rating: 4.2,
    features: ['AC', 'Radio']
  },
  {
    id: '4',
    brand: 'Nissan',
    model: 'Sunny',
    year: 2022,
    pricePerDay: 850,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    images: [
      'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sunny/product_code/product_version/design/964X354_B.jpg.ximg.l_12_h.smart.jpg',
      'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sunny/product_code/product_version/design/Sunny-2012-Side-Seats.jpg.ximg.l_12_h.smart.jpg',
      'https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sunny/product_code/product_version/design/Sunny-Interior.jpg.ximg.l_12_h.smart.jpg'
    ],
    location: 'Alexandria',
    available: true,
    rating: 4.5,
    features: ['AC', 'ABS', 'Airbags']
  },
  {
    id: '5',
    brand: 'Kia',
    model: 'Cerato',
    year: 2023,
    pricePerDay: 1350,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    images: [
      'https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/Engines/6111010c9260c5a9d41bdca2_7b989247-862e-4932-8b02-b9884df63ded.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpLVmkepP_A8o5Y0ypRKy9ekd1BC7PhotEQ&s',
      'https://www.autopediame.com/storage/images/Kia/Cerato/kia%20Cerato%202023%20interior%20.jpg'
    ],
    location: 'Cairo',
    available: false,
    rating: 4.9,
    features: ['Sunroof', 'Cruise Control', 'Keyless Entry']
  },
  {
    id: '6',
    brand: 'Chevrolet',
    model: 'Aveo',
    year: 2020,
    pricePerDay: 750,
    transmission: 'Automatic',
    fuelType: 'Electric',
    seats: 5,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLN6dcuZ_7e85kpimqSBvEgmHXvx8jZM0dA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCoF8yu-ZtxY_OgSpDS2FDjp8BCPzZoPFaQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwxFLZZl_cwjpK_dKK0gdudnVdJmVXsAk-A&s'
    ],
    location: 'Giza',
    available: true,
    rating: 4.1,
    features: ['AC', 'Power Steering']
  },
  {
    id: '7',
    brand: 'Peugeot',
    model: '301',
    year: 2022,
    pricePerDay: 1050,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    images: [
      'https://proauto.ba/wp-content/uploads/2016/11/peugeot-301-fl-2016-proauto-01-1024x638.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Mbtns8Mz2gyhKvzBq1LD-NnkZ95rDKSvmA&s',
      'https://cache2.arabwheels.ae/system/car_generation_pictures/28762/original/Steering%20Wheel.?1730334094'
    ],
    location: 'Cairo',
    available: true,
    rating: 4.7,
    features: ['ESP', 'Infotainment', 'Digital AC']
  }
];
