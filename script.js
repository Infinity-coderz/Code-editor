// Toggle the file explorer visibility
function toggleFileExplorer() {
    const explorer = document.getElementById("fileExplorer");
    explorer.style.display = explorer.style.display === "flex" ? "none" : "flex";
  }
  
  // Create a new file (placeholder functionality)
  function createNewFile() {
    const fileName = prompt("Enter new file name:");
    if (fileName) {
      const tabs = document.getElementById("tabs");
      const newTab = document.createElement("div");
      newTab.className = "tab";
      newTab.id = fileName;
      newTab.innerText = fileName;
      newTab.onclick = () => loadFile(fileName);
      tabs.appendChild(newTab);
  
      // Simulating the creation of a new file with initial content
      const editor = document.getElementById("editor");
      editor.value = `// New file: ${fileName}\nconsole.log("Hello, ${fileName}!");`;
      highlightSyntax();
  
      // Set the active tab
      Array.from(tabs.children).forEach(tab => tab.classList.remove("active"));
      newTab.classList.add("active");
    }
  }
  
  // Create a new folder (placeholder functionality)
  function createNewFolder() {
    const folderName = prompt("Enter new folder name:");
    if (folderName) {
      const fileExplorer = document.getElementById("fileExplorer");
      const newFolder = document.createElement("div");
      newFolder.className = "file";
      newFolder.innerText = folderName;
      fileExplorer.appendChild(newFolder);
    }
  }
  
  // Refresh the file explorer (placeholder functionality)
  function refreshFileExplorer() {
    alert("File explorer refreshed! (This is a placeholder action.)");
  }
  
  // Open a file and set its content in the editor
  function openFile(fileName) {
    const tabs = document.getElementById("tabs");
    const editor = document.getElementById("editor");
  
    // Check if the tab is already open
    if (!document.getElementById(fileName)) {
      const newTab = document.createElement("div");
      newTab.className = "tab";
      newTab.id = fileName;
      newTab.innerText = fileName;
      newTab.onclick = () => loadFile(fileName);
      tabs.appendChild(newTab);
    }
  
    // Set the editor content for demonstration
    editor.value = `// Code for ${fileName}\nconsole.log("Hello, ${fileName}!");`;
    highlightSyntax();
  
    // Set the active tab
    Array.from(tabs.children).forEach(tab => tab.classList.remove("active"));
    document.getElementById(fileName).classList.add("active");
  }
  
  // Highlight syntax in the editor
  function highlightSyntax() {
    const editor = document.getElementById("editor");
    const highlighting = document.getElementById("highlighting");
  
    const code = editor.value;
    const highlightedCode = code
      .replace(/(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, '<span class="comment">$1</span>')
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="string">$1</span>')
      .replace(/\b(const|let|var|function|if|else|return|while|for|switch|case|break|import|export|class|new|try|catch|throw|finally|async|await)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
  
    highlighting.innerHTML = highlightedCode;
  }
  
  // Execute code in the editor
  function runCode() {
    try {
      new Function(document.getElementById("editor").value)();
    } catch (error) {
      console.error(error);
    }
  }
  
  // Clear the editor content completely
  function clearEditor() {
    document.getElementById("editor").value = '';
    document.getElementById("highlighting").innerHTML = '';
  }
  
  // Sync the scroll position between the editor and the highlighting
  document.getElementById('editor').addEventListener('scroll', () => {
    document.getElementById('highlighting').scrollTop = document.getElementById('editor').scrollTop;
  });
  