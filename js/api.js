// ===========================
//  api.js – FIT4015 StudyNotes
//  Tập trung tất cả hàm gọi MockAPI
// ===========================

const API_BASE = 'https://6a0bb2c55aa893e1015a6321.mockapi.io/api/v1';
const ENDPOINTS = {
  documents: `${API_BASE}/documents`,
};

// --- GET all documents ---
function getAllDocuments() {
  return fetch(ENDPOINTS.documents)
    .then(function(res) {
      if (!res.ok) throw new Error('Lỗi HTTP: ' + res.status);
      return res.json();
    });
}

// --- GET single document by id ---
function getDocumentById(id) {
  return fetch(ENDPOINTS.documents + '/' + id)
    .then(function(res) {
      if (!res.ok) throw new Error('Không tìm thấy tài liệu');
      return res.json();
    });
}

// --- POST create new document ---
function createDocument(data) {
  return fetch(ENDPOINTS.documents, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(function(res) {
    if (!res.ok) throw new Error('Không thể tạo tài liệu');
    return res.json();
  });
}

// --- PUT update document ---
function updateDocument(id, data) {
  return fetch(ENDPOINTS.documents + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(function(res) {
    if (!res.ok) throw new Error('Không thể cập nhật tài liệu');
    return res.json();
  });
}

// --- DELETE document ---
function deleteDocument(id) {
  return fetch(ENDPOINTS.documents + '/' + id, {
    method: 'DELETE'
  }).then(function(res) {
    if (!res.ok) throw new Error('Không thể xóa tài liệu');
    return res.json();
  });
}

// --- PATCH increment view count (PUT) ---
function incrementView(doc) {
  var newViews = (parseInt(doc.views) || 0) + 1;
  return updateDocument(doc.id, { views: newViews });
}

// --- jQuery AJAX: GET (dùng cho yêu cầu jQuery AJAX) ---
function ajaxGetDocuments() {
  return $.ajax({
    url: ENDPOINTS.documents,
    method: 'GET',
    dataType: 'json'
  });
}
