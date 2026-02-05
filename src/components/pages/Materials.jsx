import { useState, useEffect } from "react";
import { 
  Search, Filter, ShoppingCart, Truck, Shield, 
  CheckCircle, ChevronRight, Star, Package, 
  Clock, DollarSign, Minus, Plus, X,
  Heart, Share2, RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";

const Materials = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: "all", name: "All Products", icon: "📦", count: 48 },
    { id: "cement", name: "Cement & Concrete", icon: "🧱", count: 12 },
    { id: "steel", name: "Steel & Reinforcement", icon: "🔩", count: 8 },
    { id: "aggregates", name: "Aggregates", icon: "🪨", count: 6 },
    { id: "roofing", name: "Roofing Materials", icon: "🏠", count: 10 },
    { id: "plumbing", name: "Plumbing", icon: "🚰", count: 7 },
    { id: "electrical", name: "Electrical", icon: "💡", count: 5 },
  ];

  const brands = ["Bamburi", "Mabati", "Mabati Rolling", "Diamond", "Crown", "Dawa", "Others"];

  const deliveryOptions = [
    { id: "standard", name: "Standard Delivery", price: "KES 2,500", time: "3-5 days" },
    { id: "express", name: "Express Delivery", price: "KES 5,000", time: "1-2 days" },
    { id: "pickup", name: "Store Pickup", price: "FREE", time: "Same day" },
  ];

  // Sample products data
  const sampleProducts = [
    {
      id: 1,
      name: "Bamburi 42.5N Cement",
      category: "cement",
      brand: "Bamburi",
      price: 850,
      unit: "50kg bag",
      stock: 150,
      rating: 4.8,
      reviews: 124,
      image: "🧱",
      description: "High-quality Portland cement for all construction needs",
      features: ["42.5N Strength", "Water Resistant", "Fast Setting"],
      discount: 0,
      popular: true
    },
    {
      id: 2,
      name: "Deformed Steel Bars",
      category: "steel",
      brand: "Diamond",
      price: 1200,
      unit: "per meter",
      stock: 80,
      rating: 4.9,
      reviews: 89,
      image: "🔩",
      description: "High tensile strength steel bars for reinforcement",
      features: ["Y12-Y32 Available", "BS4449 Certified", "Rust Resistant"],
      discount: 10,
      popular: true
    },
    {
      id: 3,
      name: "Medium Gauge Mabati",
      category: "roofing",
      brand: "Mabati",
      price: 4500,
      unit: "per sheet",
      stock: 45,
      rating: 4.7,
      reviews: 67,
      image: "🏠",
      description: "Corrugated iron sheets for durable roofing",
      features: ["Galvanized", "30yr Warranty", "Various Colors"],
      discount: 5,
      popular: false
    },
    {
      id: 4,
      name: "River Sand",
      category: "aggregates",
      brand: "Others",
      price: 18000,
      unit: "per truck",
      stock: 25,
      rating: 4.6,
      reviews: 42,
      image: "🪨",
      description: "Clean river sand for construction and plastering",
      features: ["Washed", "Fine Grade", "Clay Free"],
      discount: 0,
      popular: true
    },
    {
      id: 5,
      name: "PVC Pipes 3/4\"",
      category: "plumbing",
      brand: "Dawa",
      price: 350,
      unit: "per 6m length",
      stock: 200,
      rating: 4.5,
      reviews: 56,
      image: "🚰",
      description: "High-quality PVC pipes for water supply",
      features: ["UV Resistant", "Pressure Rated", "BS Certified"],
      discount: 15,
      popular: false
    },
    {
      id: 6,
      name: "Copper Wires 2.5mm",
      category: "electrical",
      brand: "Crown",
      price: 2800,
      unit: "per 100m roll",
      stock: 60,
      rating: 4.8,
      reviews: 78,
      image: "💡",
      description: "Pure copper electrical wires for wiring",
      features: ["Pure Copper", "PVC Insulated", "KEBS Approved"],
      discount: 0,
      popular: true
    },
  ];

  useEffect(() => {
    // In production, fetch from API
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, searchTerm, sortBy, products]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 2500;
  const tax = cartTotal * 0.16; // 16% VAT
  const grandTotal = cartTotal + deliveryFee + tax;

  return (
    <div className="materials-page">
      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h3>
              <ShoppingCart size={20} />
              Your Cart ({cart.length})
            </h3>
            <button className="close-cart" onClick={() => setShowCart(false)}>
              <X size={24} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingCart size={48} />
              <p>Your cart is empty</p>
              <button className="btn btn-primary" onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">{item.image}</div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">KES {item.price.toLocaleString()} / {item.unit}</p>
                      <div className="item-actions">
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus size={16} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus size={16} />
                          </button>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="item-total">
                      KES {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>KES {cartTotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span>KES {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (16% VAT)</span>
                  <span>KES {tax.toLocaleString()}</span>
                </div>
                <div className="summary-row total">
                  <span>Grand Total</span>
                  <span>KES {grandTotal.toLocaleString()}</span>
                </div>

                <div className="cart-actions">
                  <button className="btn btn-outline" onClick={() => setShowCart(false)}>
                    Continue Shopping
                  </button>
                  <button className="btn btn-primary">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="materials-hero section">
        <div className="container">
          <div className="materials-hero-content">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <ChevronRight size={16} />
              <span className="breadcrumb-current">Construction Materials</span>
            </div>
            
            <h1 className="materials-hero-title">Quality Construction Materials</h1>
            <p className="materials-hero-subtitle">
              Source all your building materials from one trusted supplier. 
              Genuine products, competitive prices, direct delivery.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <Shield size={24} />
                <span>Genuine Quality</span>
              </div>
              <div className="feature">
                <Truck size={24} />
                <span>Direct Delivery</span>
              </div>
              <div className="feature">
                <DollarSign size={24} />
                <span>Wholesale Prices</span>
              </div>
              <div className="feature">
                <CheckCircle size={24} />
                <span>Certified Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="filters-section section bg-light">
        <div className="container">
          <div className="filters-grid">
            {/* Search Bar */}
            <div className="search-container">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search materials, brands, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm("")}>
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              <div className="filter-label">
                <Filter size={18} />
                <span>Categories</span>
              </div>
              <div className="category-chips">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`category-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <span className="chip-icon">{cat.icon}</span>
                    <span>{cat.name}</span>
                    <span className="chip-count">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort & View Options */}
            <div className="sort-options">
              <div className="sort-by">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="view-options">
                <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
                  <ShoppingCart size={20} />
                  <span className="cart-count">{cart.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section section">
        <div className="container">
          <div className="products-header">
            <h2 className="section-title">Building Materials</h2>
            <p className="section-description">
              {filteredProducts.length} products found
            </p>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => {
              const isInWishlist = wishlist.includes(product.id);
              const discountedPrice = product.discount
                ? product.price * (1 - product.discount / 100)
                : product.price;

              return (
                <div key={product.id} className="product-card">
                  {product.discount > 0 && (
                    <div className="discount-badge">-{product.discount}%</div>
                  )}
                  {product.popular && (
                    <div className="popular-badge">Popular</div>
                  )}

                  <button
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart size={20} fill={isInWishlist ? "#ef4444" : "none"} />
                  </button>

                  <div className="product-image">{product.image}</div>

                  <div className="product-content">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>

                    <div className="product-features">
                      {product.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          <CheckCircle size={12} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < Math.floor(product.rating) ? "#FFD700" : "none"}
                            stroke="#FFD700"
                          />
                        ))}
                        <span>({product.reviews})</span>
                      </div>
                      <div className="brand">{product.brand}</div>
                    </div>

                    <div className="product-price">
                      {product.discount > 0 ? (
                        <>
                          <span className="original-price">
                            KES {product.price.toLocaleString()}
                          </span>
                          <span className="discounted-price">
                            KES {discountedPrice.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="current-price">
                          KES {product.price.toLocaleString()}
                        </span>
                      )}
                      <span className="price-unit">/{product.unit}</span>
                    </div>

                    <div className="product-stock">
                      <Package size={16} />
                      <span>{product.stock} in stock</span>
                    </div>

                    <div className="product-actions">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                      <button className="quick-view-btn">
                        <Share2 size={18} />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <Search size={48} />
              <h3>No products found</h3>
              <p>Try adjusting your search or filters</p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                  setPriceRange([0, 1000000]);
                }}
              >
                <RotateCcw size={18} />
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Delivery & Services */}
      <section className="delivery-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Delivery & Services</h2>
            <p className="section-description">
              Fast and reliable delivery across Kenya
            </p>
          </div>

          <div className="delivery-options">
            {deliveryOptions.map(option => (
              <div key={option.id} className="delivery-option">
                <div className="option-icon">
                  <Truck size={32} />
                </div>
                <h3>{option.name}</h3>
                <div className="option-price">{option.price}</div>
                <div className="option-time">
                  <Clock size={16} />
                  {option.time}
                </div>
                <p>Free delivery on orders over KES 50,000</p>
              </div>
            ))}
          </div>

          <div className="bulk-order-cta">
            <div className="bulk-content">
              <h3>Need Bulk Order Discounts?</h3>
              <p>Contact us for wholesale prices on large quantity orders</p>
            </div>
            <button className="btn btn-primary">
              <Phone size={20} />
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="materials-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Need Help Selecting Materials?</h2>
              <p className="cta-description">
                Our engineering team can help you choose the right materials 
                for your specific project requirements.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">
                  <MessageSquare size={20} />
                  Chat with Expert
                </button>
                <a href="tel:+254712345678" className="btn btn-outline">
                  <Phone size={20} />
                  Call: +254 712 345 678
                </a>
              </div>
            </div>
            <div className="cta-image">
              <div className="image-placeholder">
                <Package size={64} />
                <p>Expert Advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;