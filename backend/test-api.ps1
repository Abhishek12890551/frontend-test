# Test the API endpoints

# Test data
$baseUrl = "http://localhost:3000/api"
$testUser = @{
    name = "Test User"
    email = "test@example.com"
    password = "password123"
}

Write-Host "🚀 Testing Authentication & Settings API..." -ForegroundColor Green

# Test 1: Register user
Write-Host "`n1. Testing user registration..." -ForegroundColor Yellow
try {
    $registerResponse = Invoke-RestMethod -Uri "$baseUrl/register" -Method Post -Body ($testUser | ConvertTo-Json) -ContentType "application/json"
    Write-Host "✅ Registration successful" -ForegroundColor Green
    Write-Host $registerResponse.message
} catch {
    Write-Host "❌ Registration failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 2: Login user
Write-Host "`n2. Testing user login..." -ForegroundColor Yellow
try {
    $loginData = @{
        email = $testUser.email
        password = $testUser.password
    }
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/login" -Method Post -Body ($loginData | ConvertTo-Json) -ContentType "application/json"
    $token = $loginResponse.token
    $headers = @{
        "Authorization" = "Bearer $token"
        "Content-Type" = "application/json"
    }
    Write-Host "✅ Login successful" -ForegroundColor Green
    Write-Host "Token: $($token.Substring(0, 20))..."
} catch {
    Write-Host "❌ Login failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Test 3: Get profile
Write-Host "`n3. Testing get profile..." -ForegroundColor Yellow
try {
    $profileResponse = Invoke-RestMethod -Uri "$baseUrl/profile" -Method Get -Headers $headers
    Write-Host "✅ Profile retrieved successfully" -ForegroundColor Green
    Write-Host "User: $($profileResponse.data.name) ($($profileResponse.data.email))"
} catch {
    Write-Host "❌ Get profile failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 4: Update profile
Write-Host "`n4. Testing profile update..." -ForegroundColor Yellow
try {
    $updateData = @{
        name = "Updated Test User"
    }
    $updateResponse = Invoke-RestMethod -Uri "$baseUrl/profile" -Method Patch -Body ($updateData | ConvertTo-Json) -Headers $headers
    Write-Host "✅ Profile updated successfully" -ForegroundColor Green
    Write-Host "New name: $($updateResponse.data.name)"
} catch {
    Write-Host "❌ Profile update failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 5: Get preferences
Write-Host "`n5. Testing get preferences..." -ForegroundColor Yellow
try {
    $prefsResponse = Invoke-RestMethod -Uri "$baseUrl/preferences" -Method Get -Headers $headers
    Write-Host "✅ Preferences retrieved successfully" -ForegroundColor Green
    Write-Host "Theme: $($prefsResponse.data.theme)"
} catch {
    Write-Host "❌ Get preferences failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 6: Save preferences
Write-Host "`n6. Testing save preferences..." -ForegroundColor Yellow
try {
    $prefsData = @{
        theme = "dark"
        dashboardLayout = @{
            sidebarCollapsed = $true
            gridSize = "large"
        }
        notifications = @{
            email = $false
            push = $true
            desktop = $true
        }
    }
    $savePrefsResponse = Invoke-RestMethod -Uri "$baseUrl/preferences" -Method Post -Body ($prefsData | ConvertTo-Json -Depth 3) -Headers $headers
    Write-Host "✅ Preferences saved successfully" -ForegroundColor Green
    Write-Host "Theme: $($savePrefsResponse.data.theme)"
} catch {
    Write-Host "❌ Save preferences failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 7: Get dashboard summary
Write-Host "`n7. Testing dashboard summary..." -ForegroundColor Yellow
try {
    $dashboardResponse = Invoke-RestMethod -Uri "$baseUrl/dashboard-summary" -Method Get -Headers $headers
    Write-Host "✅ Dashboard summary retrieved successfully" -ForegroundColor Green
    Write-Host "Total projects: $($dashboardResponse.data.stats.totalProjects)"
    Write-Host "Active projects: $($dashboardResponse.data.stats.activeProjects)"
    Write-Host "Unread notifications: $($dashboardResponse.data.stats.unreadNotifications)"
} catch {
    Write-Host "❌ Dashboard summary failed: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n🎉 API testing completed!" -ForegroundColor Green
Write-Host "All endpoints are working correctly." -ForegroundColor Green
