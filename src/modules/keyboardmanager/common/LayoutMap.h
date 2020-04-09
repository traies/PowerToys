#pragma once
#include <interface/lowlevel_keyboard_event_data.h>
#include <string>
#include <map>
#include <mutex>

// Wrapper class to handle keyboard layout
class LayoutMap
{
private:
    // Stores mappings for all the virtual key codes to the name of the key
    std::map<DWORD, std::wstring> keyboardLayoutMap;
    std::mutex keyboardLayoutMap_mutex;

public:
    // Update Keyboard layout according to input locale identifier
    void UpdateLayout(HKL layout);

    LayoutMap()
    {
        HKL layout = GetKeyboardLayout(0);
        UpdateLayout(layout);
    }

    // Function to return the unicode string name of the key
    std::wstring GetKeyName(DWORD key);


};
