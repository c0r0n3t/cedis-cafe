import MenuItem from "../models/MenuItem";

const menuItems = [
  // Hot Coffee
  new MenuItem(1, "Latte", "Hot Coffee", 120, "", "Smooth espresso with steamed milk"),
  new MenuItem(2, "Cappuccino", "Hot Coffee", 125, "", "Espresso with thick, creamy milk foam"),
  new MenuItem(3, "Americano", "Hot Coffee", 100, "", "Espresso topped with hot water"),
  new MenuItem(4, "Caramel Macchiato", "Hot Coffee", 150, "", "Vanilla, steamed milk, espresso, and caramel drizzle"),
  new MenuItem(5, "Mocha", "Hot Coffee", 140, "", "Espresso blended with chocolate and milk"),
  new MenuItem(6, "White Mocha", "Hot Coffee", 145, "", "Espresso with white chocolate and steamed milk"),

  // Iced Coffee
  new MenuItem(7, "Iced Latte", "Iced Coffee", 130, "", "Espresso with cold milk over ice"),
  new MenuItem(8, "Iced Cappuccino", "Iced Coffee", 135, "", "Espresso with cold milk and foam over ice"),
  new MenuItem(9, "Iced Americano", "Iced Coffee", 110, "", "Espresso with cold water over ice"),
  new MenuItem(10, "Iced Caramel Macchiato", "Iced Coffee", 160, "", "Vanilla, cold milk, espresso, and caramel over ice"),
  new MenuItem(11, "Iced Mocha", "Iced Coffee", 150, "", "Espresso, chocolate, and cold milk over ice"),
  new MenuItem(12, "Iced White Mocha", "Iced Coffee", 155, "", "Espresso with white chocolate and cold milk over ice"),

  // Hot Tea
  new MenuItem(13, "Green Tea", "Hot Tea", 90, "", "Light and fresh hot green tea"),
  new MenuItem(14, "Chamomile Tea", "Hot Tea", 95, "", "Calming herbal tea with a mild floral taste"),
  new MenuItem(15, "Milk Tea", "Hot Tea", 110, "", "Black tea with creamy milk"),

  // Iced Tea
  new MenuItem(16, "Iced Green Tea", "Iced Tea", 100, "", "Chilled and refreshing green tea"),
  new MenuItem(17, "Iced Chamomile Tea", "Iced Tea", 105, "", "Cool herbal tea with a mild floral taste"),
  new MenuItem(18, "Iced Milk Tea", "Iced Tea", 120, "", "Chilled black tea with creamy milk"),
  new MenuItem(19, "Iced Lemon Tea", "Iced Tea", 95, "", "Refreshing tea with a splash of lemon"),

  // Chocolate Drinks
  new MenuItem(20, "Hot Chocolate", "Chocolate Drinks", 120, "", "Creamy steamed milk with rich chocolate"),
  new MenuItem(21, "Iced Chocolate", "Chocolate Drinks", 130, "", "Rich chocolate and cold milk over ice"),

  // Pastries
  new MenuItem(22, "Butter Croissant", "Pastries", 85, "", "Flaky, buttery, and freshly baked"),
  new MenuItem(23, "Blueberry Muffin", "Pastries", 95, "", "Soft muffin packed with blueberries"),

  // Bars & Brownies
  new MenuItem(24, "Brownies", "Bars & Brownies", 100, "", "Rich and fudgy chocolate brownies"),
  new MenuItem(25, "Revel Bars", "Bars & Brownies", 105, "", "Chewy oatmeal bars layered with chocolate"),
  new MenuItem(26, "Butterscotch Bar", "Bars & Brownies", 95, "", "Sweet, buttery bar with a caramelized butterscotch taste"),

  // Smoothies
  new MenuItem(27, "Strawberry Smoothie", "Smoothies", 130, "", "Blended strawberries with milk and ice"),
  new MenuItem(28, "Mango Smoothie", "Smoothies", 130, "", "Blended ripe mango with milk and ice"),
  new MenuItem(29, "Chocolate Smoothie", "Smoothies", 140, "", "Blended chocolate with milk and ice"),
  new MenuItem(30, "Banana Smoothie", "Smoothies", 125, "", "Blended banana with milk and ice"),
  new MenuItem(31, "Blueberry Smoothie", "Smoothies", 135, "", "Blended blueberries with milk and ice"),
  new MenuItem(32, "Mixed Berry Smoothie", "Smoothies", 140, "", "Strawberries, blueberries, and raspberries blended with ice"),
];

export default menuItems;