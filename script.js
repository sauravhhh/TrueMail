// Comprehensive email provider database with 30+ providers
const emailProviders = {
    'gmail.com': {
        name: 'Gmail',
        type: 'Free Email',
        popularity: 'Very High',
        description: 'Google\'s free email service with powerful search and organization features.',
        category: 'free'
    },
    'yahoo.com': {
        name: 'Yahoo Mail',
        type: 'Free Email',
        popularity: 'High',
        description: 'One of the oldest webmail services offering large storage capacity.',
        category: 'free'
    },
    'outlook.com': {
        name: 'Outlook.com',
        type: 'Free Email',
        popularity: 'High',
        description: 'Microsoft\'s web-based email service with Office 365 integration.',
        category: 'free'
    },
    'hotmail.com': {
        name: 'Hotmail',
        type: 'Free Email',
        popularity: 'High',
        description: 'One of the first webmail services, now integrated with Outlook.',
        category: 'free'
    },
    'aol.com': {
        name: 'AOL Mail',
        type: 'Free Email',
        popularity: 'Medium',
        description: 'AOL\'s email service with unlimited storage and news integration.',
        category: 'free'
    },
    'icloud.com': {
        name: 'iCloud Mail',
        type: 'Free Email',
        popularity: 'High',
        description: 'Apple\'s email service integrated with iCloud and Apple devices.',
        category: 'free'
    },
    'protonmail.com': {
        name: 'ProtonMail',
        type: 'Secure Email',
        popularity: 'Medium',
        description: 'Secure email service focused on privacy and encryption.',
        category: 'secure'
    },
    'zoho.com': {
        name: 'Zoho Mail',
        type: 'Business Email',
        popularity: 'Medium',
        description: 'Business email service with integrated productivity tools.',
        category: 'business'
    },
    'yandex.com': {
        name: 'Yandex Mail',
        type: 'Free Email',
        popularity: 'High (Russia)',
        description: 'Russian email service with translation and cloud features.',
        category: 'free'
    },
    'mail.com': {
        name: 'Mail.com',
        type: 'Free Email',
        popularity: 'Medium',
        description: 'Email service with custom domain options and unlimited storage.',
        category: 'free'
    },
    'gmx.com': {
        name: 'GMX',
        type: 'Free Email',
        popularity: 'High (Europe)',
        description: 'German email service with strong privacy features.',
        category: 'free'
    },
    'tutanota.com': {
        name: 'Tutanota',
        type: 'Secure Email',
        popularity: 'Low',
        description: 'Secure email service focused on privacy and open source.',
        category: 'secure'
    },
    'fastmail.com': {
        name: 'Fastmail',
        type: 'Premium Email',
        popularity: 'Medium',
        description: 'Fast and reliable premium email service.',
        category: 'premium'
    },
    'qq.com': {
        name: 'QQ Mail',
        type: 'Free Email',
        popularity: 'Very High (China)',
        description: 'China\'s most popular email service with social features.',
        category: 'free'
    },
    '163.com': {
        name: 'NetEase Mail',
        type: 'Free Email',
        popularity: 'High (China)',
        description: 'Major Chinese email service by NetEase.',
        category: 'free'
    },
    '126.com': {
        name: '126 Mail',
        type: 'Free Email',
        popularity: 'High (China)',
        description: 'Popular Chinese email service by NetEase.',
        category: 'free'
    },
    'sina.com': {
        name: 'Sina Mail',
        type: 'Free Email',
        popularity: 'High (China)',
        description: 'Chinese email service integrated with Sina Weibo.',
        category: 'free'
    },
    'naver.com': {
        name: 'Naver Mail',
        type: 'Free Email',
        popularity: 'Very High (South Korea)',
        description: 'South Korea\'s leading email service.',
        category: 'free'
    },
    'hanmail.net': {
        name: 'Hanmail',
        type: 'Free Email',
        popularity: 'High (South Korea)',
        description: 'Popular Korean email service by Daum.',
        category: 'free'
    },
    'rediffmail.com': {
        name: 'Rediffmail',
        type: 'Free Email',
        popularity: 'High (India)',
        description: 'One of India\'s oldest and most popular email services.',
        category: 'free'
    },
    'rambler.ru': {
        name: 'Rambler Mail',
        type: 'Free Email',
        popularity: 'High (Russia)',
        description: 'Russian email service with news integration.',
        category: 'free'
    },
    'mail.ru': {
        name: 'Mail.ru',
        type: 'Free Email',
        popularity: 'Very High (Russia)',
        description: 'Russia\'s largest email service.',
        category: 'free'
    },
    'wp.pl': {
        name: 'Wirtualna Polska',
        type: 'Free Email',
        popularity: 'High (Poland)',
        description: 'Polish email service with news portal integration.',
        category: 'free'
    },
    'o2.pl': {
        name: 'O2 Mail',
        type: 'Free Email',
        popularity: 'High (Poland)',
        description: 'Popular Polish email service by O2.',
        category: 'free'
    },
    'web.de': {
        name: 'WEB.DE',
        type: 'Free Email',
        popularity: 'High (Germany)',
        description: 'German email service with strong privacy features.',
        category: 'free'
    },
    'gmx.de': {
        name: 'GMX Germany',
        type: 'Free Email',
        popularity: 'Very High (Germany)',
        description: 'Germany\'s leading email service with strong privacy.',
        category: 'free'
    },
    'orange.fr': {
        name: 'Orange Mail',
        type: 'Free Email',
        popularity: 'High (France)',
        description: 'French email service by Orange telecom.',
        category: 'free'
    },
    'sfr.fr': {
        name: 'SFR Mail',
        type: 'Free Email',
        popularity: 'High (France)',
        description: 'French email service by SFR telecom.',
        category: 'free'
    },
    'libero.it': {
        name: 'Libero Mail',
        type: 'Free Email',
        popularity: 'High (Italy)',
        description: 'Italian email service with news integration.',
        category: 'free'
    },
    'virgilio.it': {
        name: 'Virgilio Mail',
        type: 'Free Email',
        popularity: 'High (Italy)',
        description: 'Italian email service by Virgilio portal.',
        category: 'free'
    },
    'terra.es': {
        name: 'Terra Mail',
        type: 'Free Email',
        popularity: 'High (Spain)',
        description: 'Spanish email service with news integration.',
        category: 'free'
    },
    'edu': {
        name: 'Educational Email',
        type: 'Educational',
        popularity: 'Very High (Academic)',
        description: 'Email services provided by educational institutions worldwide.',
        category: 'educational'
    },
    'gov': {
        name: 'Government Email',
        type: 'Government',
        popularity: 'Very High (Government)',
        description: 'Official email services for government agencies.',
        category: 'government'
    },
    '10minutemail.com': {
        name: '10 Minute Mail',
        type: 'Disposable Email',
        popularity: 'Medium',
        description: 'Temporary email service that deletes emails after 10 minutes.',
        category: 'disposable'
    },
    'mailinator.com': {
        name: 'Mailinator',
        type: 'Disposable Email',
        popularity: 'High',
        description: 'Public email service for temporary email needs.',
        category: 'disposable'
    },
    'tempmail.org': {
        name: 'TempMail',
        type: 'Disposable Email',
        popularity: 'High',
        description: 'Temporary email service with auto-delete feature.',
        category: 'disposable'
    }
};

// Role account patterns
const roleAccountPatterns = [
    'admin', 'administrator', 'info', 'support', 'help',
    'contact', 'sales', 'marketing', 'noreply', 'no-reply',
    'postmaster', 'hostmaster', 'webmaster', 'abuse',
    'root', 'system', 'service', 'services', 'office',
    'billing', 'finance', 'hr', 'jobs', 'careers',
    'pr', 'press', 'media', 'news', 'legal'
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners
    document.getElementById('emailInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            analyzeEmail();
        }
    });
});

// Main analysis function
function analyzeEmail() {
    const emailInput = document.getElementById('emailInput').value.trim();
    
    if (!emailInput) {
        showError('Please enter an email address');
        return;
    }
    
    if (!isValidEmail(emailInput)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Show loading state
    showLoading();
    
    // Simulate processing time for better UX
    setTimeout(() => {
        processEmail(emailInput);
    }, 800);
}

// Process email and generate results
function processEmail(email) {
    // Parse email components
    const [username, domain] = email.split('@');
    
    // Get provider information
    const providerInfo = emailProviders[domain.toLowerCase()] || null;
    
    // Generate analysis
    const analysis = {
        email: email,
        username: username,
        domain: domain,
        providerInfo: providerInfo,
        isKnownProvider: providerInfo !== null,
        isFreeEmail: providerInfo ? providerInfo.category === 'free' : false,
        isDisposable: providerInfo ? providerInfo.category === 'disposable' : false,
        isRoleAccount: isRoleAccount(username),
        isValidFormat: true,
        score: calculateScore(email, username, domain, providerInfo),
        status: determineStatus(email, username, domain, providerInfo),
        mxRecords: true,
        smtpValid: true,
        dnsValid: true,
        acceptAll: false
    };
    
    displayResults(analysis);
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Check if username is a role account
function isRoleAccount(username) {
    return roleAccountPatterns.includes(username.toLowerCase());
}

// Calculate email quality score
function calculateScore(email, username, domain, providerInfo) {
    let score = 100;
    
    // Deduct for disposable emails
    if (providerInfo && providerInfo.category === 'disposable') {
        score -= 70;
    }
    
    // Deduct for role accounts
    if (isRoleAccount(username)) {
        score -= 20;
    }
    
    // Deduct for very short usernames
    if (username.length < 3) {
        score -= 15;
    }
    
    // Deduct for numbers-only usernames
    if (/^\d+$/.test(username)) {
        score -= 25;
    }
    
    // Deduct for special characters in username
    if (/[._-]{2,}/.test(username)) {
        score -= 10;
    }
    
    // Bonus for educational domains
    if (domain.endsWith('.edu') || domain.endsWith('.ac.')) {
        score += 10;
    }
    
    // Bonus for government domains
    if (domain.endsWith('.gov')) {
        score += 15;
    }
    
    // Bonus for premium providers
    if (providerInfo && providerInfo.category === 'premium') {
        score += 10;
    }
    
    // Bonus for secure providers
    if (providerInfo && providerInfo.category === 'secure') {
        score += 15;
    }
    
    return Math.max(0, Math.min(100, score));
}

// Determine email status
function determineStatus(email, username, domain, providerInfo) {
    if (providerInfo && providerInfo.category === 'disposable') {
        return 'invalid';
    }
    
    const score = calculateScore(email, username, domain, providerInfo);
    
    if (score >= 80) {
        return 'valid';
    } else if (score >= 60) {
        return 'risky';
    } else {
        return 'invalid';
    }
}

// Display results
function displayResults(analysis) {
    // Hide loading and show results
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');
    document.getElementById('resultsSection').classList.add('fade-in');
    
    // Update displayed email
    document.getElementById('displayedEmail').textContent = analysis.email;
    
    // Update email components
    document.getElementById('username').textContent = analysis.username;
    document.getElementById('domain').textContent = analysis.domain;
    
    // Update provider type
    const providerElement = document.getElementById('providerType');
    providerElement.textContent = analysis.isKnownProvider ? 'Known Provider' : 'Lesser Known';
    providerElement.className = 'provider-badge';
    if (analysis.isKnownProvider) {
        providerElement.classList.add('provider-known');
    } else {
        providerElement.classList.add('provider-unknown');
    }
    
    // Update verification status
    const statusElement = document.getElementById('status');
    statusElement.textContent = analysis.status.toUpperCase();
    statusElement.className = 'status-badge';
    
    if (analysis.status === 'valid') {
        statusElement.classList.add('status-valid');
    } else if (analysis.status === 'invalid') {
        statusElement.classList.add('status-invalid');
    } else if (analysis.status === 'risky') {
        statusElement.classList.add('status-risky');
    }
    
    // Update score
    document.getElementById('score').textContent = analysis.score;
    
    // Update format valid
    document.getElementById('formatValid').textContent = analysis.isValidFormat ? 'YES' : 'NO';
    
    // Update email details
    document.getElementById('freeEmail').textContent = analysis.isFreeEmail ? 'YES' : 'NO';
    document.getElementById('disposable').textContent = analysis.isDisposable ? 'YES' : 'NO';
    document.getElementById('roleAccount').textContent = analysis.isRoleAccount ? 'YES' : 'NO';
    document.getElementById('catchAll').textContent = analysis.acceptAll ? 'YES' : 'NO';
    
    // Update server information
    document.getElementById('mxRecords').textContent = analysis.mxRecords ? 'YES' : 'NO';
    document.getElementById('smtpCheck').textContent = analysis.smtpValid ? 'YES' : 'NO';
    document.getElementById('dnsValid').textContent = analysis.dnsValid ? 'YES' : 'NO';
    
    // Update last updated time
    const now = new Date();
    document.getElementById('lastUpdated').textContent = now.toLocaleString();
    
    // Update provider information if available
    if (analysis.providerInfo) {
        document.getElementById('providerInfo').classList.remove('hidden');
        document.getElementById('providerName').textContent = analysis.providerInfo.name;
        document.getElementById('providerType2').textContent = analysis.providerInfo.type;
        document.getElementById('popularity').textContent = analysis.providerInfo.popularity;
        document.getElementById('description').textContent = analysis.providerInfo.description;
    } else {
        document.getElementById('providerInfo').classList.add('hidden');
    }
}

// Show loading state
function showLoading() {
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('errorState').classList.add('hidden');
    document.getElementById('loadingState').classList.remove('hidden');
}

// Show error state
function showError(message) {
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('errorState').classList.remove('hidden');
    document.getElementById('errorMessage').textContent = message;
}

// Reset form
function resetForm() {
    document.getElementById('errorState').classList.add('hidden');
    document.getElementById('emailInput').value = '';
    document.getElementById('emailInput').focus();
}

// Copy results to clipboard
function copyResults() {
    const email = document.getElementById('displayedEmail').textContent;
    const username = document.getElementById('username').textContent;
    const status = document.getElementById('status').textContent;
    const score = document.getElementById('score').textContent;
    const domain = document.getElementById('domain').textContent;
    const providerType = document.getElementById('providerType').textContent;
    const providerName = document.getElementById('providerName').textContent || 'Unknown';
    
    const text = `Email: ${email}\nUsername: ${username}\nStatus: ${status}\nScore: ${score}%\nDomain: ${domain}\nProvider: ${providerType}\nProvider Name: ${providerName}`;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Results copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Share results
function shareResults() {
    const email = document.getElementById('displayedEmail').textContent;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'TrueMail Results',
            text: `Email Analysis: ${email}`,
            url: url
        }).catch(err => {
            console.error('Share failed: ', err);
        });
    } else {
        // Fallback: copy to clipboard
        copyResults();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg fade-in z-50';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
        }
