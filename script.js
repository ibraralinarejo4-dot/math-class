// 1. Navigation Panel Switcher
function showView(viewId) {
    // Pehle saari views ko chupa do
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.add('hidden');
    });
    
    // Sirf select kiye hue page view ko dikhao
    document.getElementById(viewId).classList.remove('hidden');

    // Nav bar active highlights setting
    if(viewId === 'home-view') {
        document.getElementById('nav-home').classList.add('active');
        document.getElementById('nav-subjects').classList.remove('active');
    } else {
        document.getElementById('nav-subjects').classList.add('active');
        document.getElementById('nav-home').classList.remove('active');
    }
}

// 2. Direct Subject Router Shortcut
function openSubjectMath() {
    showView('subjects-view');
    loadChapterData(1); // Default Chapter 1 open karein
}

// 3. Smooth Auto Scroll Logic for About/Calc sections
function scrollToSection(id) {
    showView('home-view');
    setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// 4. Educational Chapters Database
const chapterDatabase = {
    1: {
        title: "Chapter 1: Matrices and Determinants",
        desc: "Determinant of 2x2 matrix [a, b; c, d] is found using Formula: Ad - Bc. Singular matrices have a determinant equal to 0."
    },
    2: {
        title: "Chapter 2: Real and Complex Numbers",
        desc: "Complex number form: z = a + bi (where i = √-1). Real and imaginary parts are solved independently."
    },
    3: {
        title: "Chapter 3: Logarithms",
        desc: "Product Law: log_a(mn) = log_a(m) + log_a(n). Quotient Law: log_a(m/n) = log_a(m) - log_a(n)."
    },
    4: {
        title: "Chapter 4: Algebraic Expressions and Algebraic Formulas",
        desc: "Basic Core Identities:\n1) (a + b)² = a² + 2ab + b²\n2) (a - b)² = a² - 2ab + b²\n3) (a² - b²) = (a - b)(a + b)"
    },
    15: {
        title: "Chapter 15: Pythagoras Theorem",
        desc: "In right-angled triangles: Hypotenuse² = Base² + Perpendicular² (c² = a² + b²)."
    }
};

// 5. Dynamic Chapter Click Content Loader
function loadChapterData(chapId) {
    document.getElementById('chapter-placeholder').classList.add('hidden');
    document.getElementById('chapter-real-data').classList.remove('hidden');

    const selectedChapter = chapterDatabase[chapId];
    if(selectedChapter) {
        document.getElementById('chap-title').innerText = selectedChapter.title;
        document.getElementById('chap-desc').innerText = selectedChapter.desc;
    } else {
        document.getElementById('chap-title').innerText = "Coming Soon";
        document.getElementById('chap-desc').innerText = "Formulas, exercises, and theoretical solutions are being updated for this area.";
    }
}

// 6. Online Calculator Core Logic
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('res-val').innerText = "Please input numeric values!";
        return;
    }

    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if(num2 === 0) {
                document.getElementById('res-val').innerText = "Division by Zero Error";
                return;
            }
            result = num1 / num2; 
            break;
    }
    document.getElementById('res-val').innerText = result;
}// 1. Navigation Panel Switcher View
function showView(viewId) {
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.add('hidden');
    });
    document.getElementById(viewId).classList.remove('hidden');

    if(viewId === 'home-view') {
        document.getElementById('nav-home').classList.add('active');
        document.getElementById('nav-subjects').classList.remove('active');
    } else {
        document.getElementById('nav-subjects').classList.add('active');
        document.getElementById('nav-home').classList.remove('active');
    }
}

// 2. Direct Navigation to Mathematics
function openSubjectMath() {
    showView('subjects-view');
    loadChapterData(1); 
}

// 3. Smooth Auto Scroll to Dashboard Elements
function scrollToSection(id) {
    showView('home-view');
    setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// 4. MUKAMMAL 9TH CLASS MATH DATABASE (Chapters 1 to 17)
const chapterDatabase = {
    1: {
        title: "Chapter 1: Matrices and Determinants",
        desc: "• Matrix Order: Row × Column (m × n)\n• Determinant Formula: For A = [a, b; c, d], |A| = (ad - bc)\n• Adjoint Rule: Swap 'a' and 'd', change signs of 'b' and 'c'\n• Inverse Formula: A⁻¹ = Adj(A) / |A| (Condition: |A| ≠ 0)"
    },
    2: {
        title: "Chapter 2: Real and Complex Numbers",
        desc: "• Real Numbers: Union of Rational (Q) and Irrational (Q') sets\n• Radical Properties: n_root(ab) = n_root(a) × n_root(b)\n• Complex Numbers: z = a + bi (where a = real part, b = imaginary part)\n• Imaginary Identity: i² = -1, i³ = -i, i⁴ = 1"
    },
    3: {
        title: "Chapter 3: Logarithms",
        desc: "• Exponential Form: If a^x = y, then log_a(y) = x\n• 1st Law (Product): log_a(mn) = log_a(m) + log_a(n)\n• 2nd Law (Quotient): log_a(m/n) = log_a(m) - log_a(n)\n• 3rd Law (Power): log_a(m^n) = n log_a(m)\n• Base Change Rule: log_a(n) = log_b(n) / log_b(a)"
    },
    4: {
        title: "Chapter 4: Algebraic Expressions and Algebraic Formulas",
        desc: "• Core Identity 1: (a + b)² = a² + 2ab + b²\n• Core Identity 2: (a - b)² = a² - 2ab + b²\n• Difference of Squares: a² - b² = (a - b)(a + b)\n• Cubes Identity 1: (a + b)³ = a³ + 3ab(a + b) + b³\n• Cubes Identity 2: a³ + b³ = (a + b)(a² - ab + b²)"
    },
    5: {
        title: "Chapter 5: Factorization",
        desc: "• Remainder Theorem: When polynomial P(x) is divided by (x - c), the remainder is R = P(c)\n• Factor Theorem: (x - c) is a factor of P(x) if and only if P(c) = 0\n• Cyclic Expressions factorization rules follow grouping techniques."
    },
    6: {
        title: "Chapter 6: Algebraic Manipulation",
        desc: "• HCF (Highest Common Factor): Product of common highest power variables\n• LCM (Least Common Multiple): Product of common and uncommon expressions\n• Formula Connection: HCF × LCM = P(x) × Q(x)"
    },
    7: {
        title: "Chapter 7: Linear Equations and Inequalities",
        desc: "• Standard Linear Form: ax + b = 0 (where a ≠ 0)\n• Absolute Value Property: |x| = a means x = a or x = -a\n• Trichotomy Property of Inequality: For real numbers, either a < b, a = b, or a > b"
    },
    8: {
        title: "Chapter 8: Linear Graphs & An Application",
        desc: "• Ordered Pair Layout: (x, y) coordinates on Cartesian plane\n• Vertical Line Slope Equation: x = c (Parallel to Y-axis)\n• Horizontal Line Slope Equation: y = c (Parallel to X-axis)\n• Conversion Identity: F = 9/5(C) + 32"
    },
    9: {
        title: "Chapter 9: Introduction to Coordinate Geometry",
        desc: "• Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]\n• Midpoint Formula: M = ( (x₁ + x₂)/2 , (y₁ + y₂)/2 )\n• Collinear Points: Three or more points lying on the exact same straight line"
    },
    10: {
        title: "Chapter 10: Congruent Triangles",
        desc: "• S.A.S Postulate: Side-Angle-Side equality guarantees absolute congruence\n• Postulate Rules: S.S.S ≅ S.S.S, A.S.A ≅ A.S.A, and R.H.S ≅ R.H.S (Right-angle Hypotenuse Side)"
    },
    11: {
        title: "Chapter 11: Parallelograms and Triangles",
        desc: "• Theorem: In a parallelogram, opposite sides and opposite angles are always equal\n• Diagonals Rule: Diagonals of any parallelogram bisect each other at intersection points"
    },
    12: {
        title: "Chapter 12: Line Bisectors and Angle Bisectors",
        desc: "• Right Bisector Theorem: Any point on the right bisector of a line segment is equidistant from its end-points\n• Angle Bisector Theorem: Any point on the bisector of an angle is equidistant from its arms"
    },
    13: {
        title: "Chapter 13: Sides and Angles of a Triangle",
        desc: "• Triangle Side Inequality: The sum of lengths of any two sides of a triangle is strictly greater than the length of the third side\n• Angle Rule: The side opposite to the greater angle is longer"
    },
    14: {
        title: "Chapter 14: Ratio and Proportion",
        desc: "• Proportion Rule: A line parallel to one side of a triangle intersecting other sides divides them proportionally\n• Ratio: Internal bisector of an angle divides the opposite side in ratio of remaining sides"
    },
    15: {
        title: "Chapter 15: Pythagoras Theorem",
        desc: "• Pythagoras Formula: In a right-angled triangle, Hypotenuse² = Base² + Perpendicular²\n• Equation Representation: c² = a² + b²\n• Converse Rule: If c² = a² + b², then the triangle is valid right-angled"
    },
    16: {
        title: "Chapter 16: Theorems Related with Area",
        desc: "• Parallelograms Area: Parallelograms on the same base and between same parallels are equal in area\n• Triangles Area Formula: Area = 1/2 × Base × Altitude\n• Equal base triangles between identical parallels have equal areas"
    },
    17: {
        title: "Chapter 17: Practical Geometry - Triangles",
        desc: "• Concurrent Lines: Lines passing through a single common center point\n• Triangle Properties:\n1) Inside Angle Bisectors are concurrent\n2) Perpendicular bisectors of sides are concurrent\n3) Triangles Altitudes are concurrent"
    }
};

// 5. Dynamic Chapter Click Content Loader
function loadChapterData(chapId) {
    document.getElementById('chapter-placeholder').classList.add('hidden');
    document.getElementById('chapter-real-data').classList.remove('hidden');

    const selectedChapter = chapterDatabase[chapId];
    if(selectedChapter) {
        document.getElementById('chap-title').innerText = selectedChapter.title;
        document.getElementById('chap-desc').innerText = selectedChapter.desc;
    } else {
        document.getElementById('chap-title').innerText = "Coming Soon";
        document.getElementById('chap-desc').innerText = "Formulas and chapter solutions are being uploaded.";
    }
}

// 6. Online Calculator Operational Logic
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('res-val').innerText = "Please input numeric values!";
        return;
    }

    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if(num2 === 0) {
                document.getElementById('res-val').innerText = "Division by Zero Error";
                return;
            }
            result = num1 / num2; 
            break;
    }
    document.getElementById('res-val').innerText = result;
}

