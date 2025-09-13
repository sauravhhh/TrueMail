// API Configuration
const EMAIL_API_URL = 'https://api.quickemailverification.com/v1/verify';
const EMAIL_API_KEY = '524528a5257a3698005807815b021916eb1b54588ad8a24eb53cf8048236';
const WHOIS_API_URL = 'https://api.whoapi.com/';

// Comprehensive list of known email providers
const knownEmailProviders = [
    // Major providers
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'protonmail.com', 'zoho.com', 'yandex.com',
    'mail.com', 'gmx.com', 'tutanota.com', 'fastmail.com',
    
    // Regional providers
    'qq.com', '163.com', '126.com', 'sina.com', 'sohu.com', // China
    'naver.com', 'hanmail.net', 'daum.net', // South Korea
    'rediffmail.com', // India
    'rambler.ru', 'mail.ru', 'yandex.ru', // Russia
    'wp.pl', 'o2.pl', 'interia.pl', // Poland
    'web.de', 'gmx.de', 't-online.de', // Germany
    'orange.fr', 'sfr.fr', 'free.fr', 'laposte.net', // France
    'libero.it', 'virgilio.it', 'tin.it', // Italy
    'terra.es', 'yahoo.es', 'hotmail.es', // Spain
    
    // Educational
    'edu', 'ac.uk', 'edu.au', 'ac.nz', 'edu.in', 'edu.sg',
    'edu.cn', 'edu.jp', 'edu.kr', 'edu.de', 'edu.fr',
    
    // Government
    'gov', 'gov.uk', 'gov.au', 'gov.nz', 'gov.in', 'gov.sg',
    'gov.cn', 'gov.jp', 'gov.kr', 'gov.de', 'gov.fr',
    
    // Common disposable/temporary email providers
    '10minutemail.com', 'guerrillamail.com', 'mailinator.com',
    'tempmail.org', 'throwawaymail.com', 'sharklasers.com',
    'yopmail.com', 'maildrop.cc', 'tempmailo.com',
    'temp-mail.org', 'getnada.com', 'mailnull.com'
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners
    document.getElementById('emailInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verifyEmail();
        }
    });
});

// Main verification function
async function verifyEmail() {
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
    
    try {
        // Use QuickEmailVerification API
        const emailResponse = await fetch(`${EMAIL_API_URL}?email=${encodeURIComponent(emailInput)}&apikey=${EMAIL_API_KEY}`);
        
        if (!emailResponse.ok) {
            throw new Error(`HTTP error! status: ${emailResponse.status}`);
        }
        
        const emailData = await emailResponse.json();
        
        if (emailData.success) {
            // Get domain for WHOIS lookup
            const domain = emailData.domain;
            const whoisData = await getWhoisData(domain);
            
            displayResults(emailData, whoisData);
        } else {
            throw new Error(emailData.message || 'Email verification failed');
        }
    } catch (error) {
        console.error('API Error:', error);
        showError(`Network error: ${error.message}. Please check your connection and try again.`);
    }
}

// Get WHOIS data for domain
async function getWhoisData(domain) {
    try {
        // Use whoapi.com for WHOIS data
        const response = await fetch(`${WHOIS_API_URL}?domain=${domain}&r=whois&apikey=demokey`);
        
        if (!response.ok) {
            throw new Error(`WHOIS HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 0 && data.whois) {
            // Parse WHOIS data
            return parseWhoisData(data.whois, domain);
        } else {
            throw new Error('WHOIS data not available');
        }
    } catch (error) {
        console.error('WHOIS Error:', error);
        // Return minimal WHOIS data if API fails
        return {
            registrar: 'Unknown',
            registeredOn: 'Unknown',
            expiresOn: 'Unknown',
            updatedOn: 'Unknown',
            nameServers: 'Unknown',
            domainStatus: 'Unknown',
            dnssec: 'Unknown',
            registrantOrg: 'Unknown',
            registrantCountry: 'Unknown',
            registrantState: 'Unknown'
        };
    }
}

// Parse WHOIS data
function parseWhoisData(whoisText, domain) {
    const result = {
        registrar: 'Unknown',
        registeredOn: 'Unknown',
        expiresOn: 'Unknown',
        updatedOn: 'Unknown',
        nameServers: 'Unknown',
        domainStatus: 'Unknown',
        dnssec: 'Unknown',
        registrantOrg: 'Unknown',
        registrantCountry: 'Unknown',
        registrantState: 'Unknown'
    };
    
    // Extract registrar
    const registrarMatch = whoisText.match(/Registrar\s*:\s*(.+)/i);
    if (registrarMatch) {
        result.registrar = registrarMatch[1].trim();
    }
    
    // Extract registration date
    const regDateMatch = whoisText.match(/(Creation Date|Registered On|Registration Date)\s*:\s*(.+)/i);
    if (regDateMatch) {
        result.registeredOn = formatDate(regDateMatch[2]);
    }
    
    // Extract expiration date
    const expDateMatch = whoisText.match(/(Registry Expiry Date|Expiration Date|Expires On)\s*:\s*(.+)/i);
    if (expDateMatch) {
        result.expiresOn = formatDate(expDateMatch[2]);
    }
    
    // Extract updated date
    const updDateMatch = whoisText.match(/(Updated Date|Last Updated|Modified On)\s*:\s*(.+)/i);
    if (updDateMatch) {
        result.updatedOn = formatDate(updDateMatch[2]);
    }
    
    // Extract name servers
    const nsMatch = whoisText.match(/Name Server\s*:\s*(.+)/gi);
    if (nsMatch) {
        result.nameServers = nsMatch.map(ns => ns.split(':')[1].trim()).join(', ');
    }
    
    // Extract domain status
    const statusMatch = whoisText.match(/Domain Status\s*:\s*(.+)/gi);
    if (statusMatch) {
        result.domainStatus = statusMatch.map(status => status.split(':')[1].trim()).join(', ');
    }
    
    // Extract DNSSEC
    const dnssecMatch = whoisText.match(/DNSSEC\s*:\s*(.+)/i);
    if (dnssecMatch) {
        result.dnssec = dnssecMatch[1].trim();
    }
    
    // Extract registrant organization
    const orgMatch = whoisText.match(/(Registrant Organization|Registrant Org)\s*:\s*(.+)/i);
    if (orgMatch) {
        result.registrantOrg = orgMatch[2].trim();
    }
    
    // Extract registrant country
    const countryMatch = whoisText.match(/(Registrant Country|Country)\s*:\s*(.+)/i);
    if (countryMatch) {
        result.registrantCountry = countryMatch[2].trim();
    }
    
    // Extract registrant state
    const stateMatch = whoisText.match(/(Registrant State\/Province|State)\s*:\s*(.+)/i);
    if (stateMatch) {
        result.registrantState = stateMatch[2].trim();
    }
    
    return result;
}

// Format date consistently
function formatDate(dateStr) {
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return dateStr;
        }
        return date.toISOString().split('T')[0];
    } catch (error) {
        return dateStr;
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Check if domain is a known email provider
function isKnownProvider(domain) {
    return knownEmailProviders.includes(domain.toLowerCase());
}

// Display results
function displayResults(emailData, whoisData) {
    // Hide loading and show results
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');
    document.getElementById('resultsSection').classList.add('fade-in');
    
    // Update displayed email
    document.getElementById('displayedEmail').textContent = emailData.email;
    
    // Update email components
    document.getElementById('username').textContent = emailData.user || '-';
    document.getElementById('domain').textContent = emailData.domain || '-';
    
    // Update provider type
    const providerElement = document.getElementById('providerType');
    const isKnown = isKnownProvider(emailData.domain);
    providerElement.textContent = isKnown ? 'Known Provider' : 'Lesser Known';
    providerElement.className = 'provider-badge';
    if (isKnown) {
        providerElement.classList.add('provider-known');
    } else {
        providerElement.classList.add('provider-unknown');
    }
    
    // Update verification status
    const statusElement = document.getElementById('status');
    const result = emailData.result || 'unknown';
    statusElement.textContent = result.toUpperCase();
    statusElement.className = 'status-badge';
    
    if (result === 'valid') {
        statusElement.classList.add('status-valid');
    } else if (result === 'invalid') {
        statusElement.classList.add('status-invalid');
    } else if (result === 'risky') {
        statusElement.classList.add('status-risky');
    } else {
        statusElement.classList.add('status-unknown');
    }
    
    // Update score
    const score = Math.round((emailData.score || 0) * 100);
    document.getElementById('score').textContent = score;
    
    // Update format valid
    document.getElementById('formatValid').textContent = emailData.local?.valid ? 'YES' : 'NO';
    
    // Update email details
    document.getElementById('freeEmail').textContent = emailData.free ? 'YES' : 'NO';
    document.getElementById('disposable').textContent = emailData.disposable ? 'YES' : 'NO';
    document.getElementById('roleAccount').textContent = emailData.role ? 'YES' : 'NO';
    document.getElementById('catchAll').textContent = emailData.accept_all ? 'YES' : 'NO';
    
    // Update server information
    document.getElementById('mxRecords').textContent = emailData.dns?.mx ? 'YES' : 'NO';
    document.getElementById('smtpCheck').textContent = emailData.smtp?.valid ? 'YES' : 'NO';
    document.getElementById('dnsValid').textContent = emailData.dns?.valid ? 'YES' : 'NO';
    
    // Update last updated time
    const now = new Date();
    document.getElementById('lastUpdated').textContent = now.toLocaleString();
    
    // Update WHOIS information
    document.getElementById('registrar').textContent = whoisData.registrar;
    document.getElementById('registeredOn').textContent = whoisData.registeredOn;
    document.getElementById('expiresOn').textContent = whoisData.expiresOn;
    document.getElementById('updatedOn').textContent = whoisData.updatedOn;
    document.getElementById('nameServers').textContent = whoisData.nameServers;
    document.getElementById('domainStatus').textContent = whoisData.domainStatus;
    document.getElementById('dnssec').textContent = whoisData.dnssec;
    document.getElementById('registrantOrg').textContent = whoisData.registrantOrg;
    document.getElementById('registrantCountry').textContent = whoisData.registrantCountry;
    document.getElementById('registrantState').textContent = whoisData.registrantState;
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
    const registrar = document.getElementById('registrar').textContent;
    const registrantOrg = document.getElementById('registrantOrg').textContent;
    
    const text = `Email: ${email}\nUsername: ${username}\nStatus: ${status}\nScore: ${score}%\nDomain: ${domain}\nProvider: ${providerType}\nRegistrar: ${registrar}\nRegistrant: ${registrantOrg}`;
    
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
            text: `Email Verification: ${email}`,
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
