// Extra JavaScript for enhancing the Material theme functionality

document.addEventListener('DOMContentLoaded', function() {
    // Add copy functionality to code blocks
    enhanceCodeBlocks();
    
    // Add table of contents highlighting
    enhanceToc();
    
    // Add smooth scrolling to anchor links
    enhanceAnchors();
    
    // Add version selector enhancement
    enhanceVersionSelector();
    
    // Add mobile improvements
    enhanceMobileExperience();
  });
  
  /**
   * Enhances code blocks with additional functionality
   */
  function enhanceCodeBlocks() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock, index) {
      // Add unique ID to each code block
      const codeId = `code-block-${index}`;
      codeBlock.id = codeId;
      
      // Create wrapper for additional controls
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      codeBlock.parentNode.insertBefore(wrapper, codeBlock);
      wrapper.appendChild(codeBlock.parentNode);
      
      // Add language label if available
      const langClass = Array.from(codeBlock.classList).find(cls => cls.startsWith('language-'));
      if (langClass) {
        const language = langClass.replace('language-', '');
        const langLabel = document.createElement('div');
        langLabel.className = 'code-language-label';
        langLabel.textContent = language;
        wrapper.insertBefore(langLabel, codeBlock.parentNode);
      }
      
      // Add line numbers
      addLineNumbers(codeBlock);
    });
  }
  
  /**
   * Adds line numbers to code blocks
   */
  function addLineNumbers(codeBlock) {
    // Split by line
    const content = codeBlock.innerHTML;
    const lines = content.split('\n');
    
    // Create new content with line numbers
    let numberedContent = '';
    lines.forEach((line, index) => {
      if (index < lines.length - 1 || line.trim()) { // Skip empty last line
        numberedContent += `<span class="line-number">${index + 1}</span>${line}\n`;
      }
    });
    
    codeBlock.innerHTML = numberedContent;
    codeBlock.classList.add('line-numbers');
  }
  
  /**
   * Enhances the table of contents with active state highlighting
   */
  function enhanceToc() {
    const tocLinks = document.querySelectorAll('.md-nav__link');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0 || tocLinks.length === 0) return;
    
    // Create sections array with offsets
    const sections = Array.from(headings).map(heading => {
      return {
        id: heading.id,
        offset: heading.offsetTop - 100
      };
    });
    
    // Highlight TOC items on scroll
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      // Find the current section
      let currentSection = sections[0];
      for (const section of sections) {
        if (section.offset <= scrollPosition) {
          currentSection = section;
        } else {
          break;
        }
      }
      
      // Update active TOC link
      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection.id}`) {
          link.classList.add('active');
        }
      });
    });
  }
  
  /**
   * Adds smooth scrolling to anchor links
   */
  function enhanceAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
          e.preventDefault();
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
            
            // Update URL but don't scroll
            history.pushState(null, null, href);
          }
        }
      });
    });
  }
  
  /**
   * Enhances version selector dropdown if present
   */
  function enhanceVersionSelector() {
    const versionSelector = document.querySelector('.md-version');
    
    if (versionSelector) {
      // Improve version selector with search
      const select = versionSelector.querySelector('select');
      if (select) {
        // Create a search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Filter versions...';
        searchInput.className = 'version-search';
        
        // Insert before select
        select.parentNode.insertBefore(searchInput, select);
        
        // Filter options based on search
        searchInput.addEventListener('input', function() {
          const value = this.value.toLowerCase();
          const options = select.querySelectorAll('option');
          
          options.forEach(option => {
            const text = option.textContent.toLowerCase();
            if (text.includes(value)) {
              option.style.display = '';
            } else {
              option.style.display = 'none';
            }
          });
        });
      }
    }
  }
  
  /**
   * Enhances the mobile experience
   */
  function enhanceMobileExperience() {
    // Check if we're on mobile
    const isMobile = window.matchMedia('(max-width: 76.1875em)').matches;
    
    if (isMobile) {
      // Add a "scroll to top" button
      const scrollButton = document.createElement('button');
      scrollButton.className = 'scroll-to-top';
      scrollButton.innerHTML = '&uarr;';
      scrollButton.setAttribute('aria-label', 'Scroll to top');
      scrollButton.style.display = 'none';
      
      document.body.appendChild(scrollButton);
      
      // Show/hide button based on scroll position
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      });
      
      // Scroll to top when clicked
      scrollButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Improve table display on mobile
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      });
    }
  }
  
  /**
   * Creates an element that detects the current theme (dark/light)
   * and updates custom styles accordingly
   */
  function setupThemeDetection() {
    // Create a hidden indicator element
    const themeIndicator = document.createElement('div');
    themeIndicator.id = 'theme-indicator';
    themeIndicator.style.display = 'none';
    document.body.appendChild(themeIndicator);
    
    // Set up a mutation observer to detect theme changes
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'data-md-color-scheme') {
          const theme = document.body.getAttribute('data-md-color-scheme');
          updateThemeSpecificStyles(theme);
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    // Initial theme check
    const initialTheme = document.body.getAttribute('data-md-color-scheme');
    updateThemeSpecificStyles(initialTheme);
  }
  
  /**
   * Updates custom styles based on current theme
   */
  function updateThemeSpecificStyles(theme) {
    const isLight = theme === 'default';
    
    // Update any theme-specific custom styles
    if (isLight) {
      // Light theme specific adjustments
      document.documentElement.style.setProperty('--custom-code-background', '#f5f7ff');
      document.documentElement.style.setProperty('--custom-font-color', '#2c3e50');
    } else {
      // Dark theme specific adjustments
      document.documentElement.style.setProperty('--custom-code-background', '#1a1a1a');
      document.documentElement.style.setProperty('--custom-font-color', '#e0e0e0');
    }
  }
  
  // Call theme detection setup
  setupThemeDetection();
  