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
  new MenuItem(23, "Chocolate Croissant", "Pastries", 100, "", "Flaky croissant filled with dark chocolate"),
  new MenuItem(24, "Almond Croissant", "Pastries", 110, "", "Buttery croissant with almond cream and sliced almonds"),
  new MenuItem(25, "Pain au Chocolat", "Pastries", 100, "", "Layered pastry with a chocolate center"),
  new MenuItem(26, "Cinnamon Roll", "Pastries", 105, "", "Soft roll swirled with cinnamon and topped with glaze"),
  new MenuItem(27, "Cheese Danish", "Pastries", 95, "", "Flaky pastry with sweet cream cheese filling"),
  new MenuItem(28, "Ensaymada", "Pastries", 85, "", "Soft, buttery brioche topped with sugar and cheese"),
  new MenuItem(29, "Banana Bread", "Pastries", 90, "", "Moist banana loaf slice, baked fresh"),
  new MenuItem(30, "Blueberry Muffin", "Pastries", 95, "", "Soft muffin packed with blueberries"),
  new MenuItem(31, "Chocolate Chip Muffin", "Pastries", 95, "", "Soft muffin studded with chocolate chips"),

  // Cookies
  new MenuItem(32, "Chocolate Chip Cookie", "Cookies", 70, "", "Classic cookie with melty chocolate chips"),
  new MenuItem(33, "Double Chocolate Cookie", "Cookies", 75, "", "Rich cocoa cookie loaded with chocolate chunks"),
  new MenuItem(34, "Oatmeal Raisin Cookie", "Cookies", 70, "", "Chewy oatmeal cookie with sweet raisins"),
  new MenuItem(35, "White Chocolate Macadamia Cookie", "Cookies", 85, "", "Buttery cookie with white chocolate and macadamia nuts"),
  new MenuItem(36, "Butter Cookie", "Cookies", 60, "", "Crisp, melt-in-your-mouth butter cookie"),

  // Bars & Brownies
  new MenuItem(37, "Brownies", "Bars & Brownies", 100, "", "Rich and fudgy chocolate brownies"),
  new MenuItem(38, "Revel Bars", "Bars & Brownies", 105, "", "Chewy oatmeal bars layered with chocolate"),
  new MenuItem(39, "Butterscotch Bar", "Bars & Brownies", 95, "", "Sweet, buttery bar with a caramelized butterscotch taste"),

  // Smoothies
  new MenuItem(40, "Strawberry Smoothie", "Smoothies", 130, "", "Blended strawberries with milk and ice"),
  new MenuItem(41, "Mango Smoothie", "Smoothies", 130, "", "Blended ripe mango with milk and ice"),
  new MenuItem(42, "Chocolate Smoothie", "Smoothies", 140, "", "Blended chocolate with milk and ice"),
  new MenuItem(43, "Banana Smoothie", "Smoothies", 125, "", "Blended banana with milk and ice"),
  new MenuItem(44, "Blueberry Smoothie", "Smoothies", 135, "", "Blended blueberries with milk and ice"),
  new MenuItem(45, "Mixed Berry Smoothie", "Smoothies", 140, "", "Strawberries, blueberries, and raspberries blended with ice"),
];

export default menuItems;