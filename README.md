# LilRegexExlplained  
(In version 2.0.0 allows user to add complex regular expression at the bottom and download the file to your device.)

Regular expressions (regex) matching is facilitated by software or programming libraries that provide regex engines. These engines are responsible for interpreting the regex patterns and determining whether a given string matches the specified pattern. 

Many programming languages come with built-in support for regex. Examples include JavaScript, Python, Java, Ruby, and others.. These languages provide functions or methods for working with regex patterns.

Here are some of the most common regex patterns:

1. **Matching Digits:**
   - `\d`: Matches any digit (0-9).

2. **Matching Non-Digits:**
   - `\D`: Matches any non-digit.

3. **Matching Word Characters:**
   - `\w`: Matches any word character (alphanumeric + underscore).

4. **Matching Non-Word Characters:**
   - `\W`: Matches any non-word character.

5. **Matching Whitespace:**
   - `\s`: Matches any whitespace character (space, tab, newline).

6. **Matching Non-Whitespace:**
   - `\S`: Matches any non-whitespace character.

7. **Matching a Specific Character:**
   - `[]`: Matches any single character within the brackets. Example: `[aeiou]` matches any vowel.

8. **Matching Repetitions:**
   - `+`: Matches one or more occurrences of the preceding character or group.
   - `*`: Matches zero or more occurrences of the preceding character or group.
   - `?`: Matches zero or one occurrence of the preceding character or group.
   - `{n}`: Matches exactly n occurrences of the preceding character or group.
   - `{n,}`: Matches n or more occurrences of the preceding character or group.
   - `{n,m}`: Matches between n and m occurrences of the preceding character or group.

9. **Anchors:**
   - `^`: Anchors the regex at the start of the string.
   - `$`: Anchors the regex at the end of the string.

10. **Escaping Special Characters:**
    - `\`: Escapes a special character, allowing you to match it literally.
   
11. **Parentheses:**
    - ( and ): Parentheses are used to group the pattern in a few ways.



# Here are some complex examples of regular expressions:

1. **Email Validation:**
   ```regex
   ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   ```
   - This regex pattern is commonly used to validate email addresses.

2. **URL Validation:**
   ```regex
   ^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
   ```
   - Validates URLs, allowing both HTTP and HTTPS protocols.

3. **Password Strength (at least 8 characters, one uppercase, one lowercase, one digit, and one special character):**
   ```regex
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   ```

4. **Date (YYYY-MM-DD) Validation:**
   ```regex
   ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$
   ```

5. **IP Address Validation:**
   ```regex
   ^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$
   ```

6. **HTML Tag Matching:**
   ```regex
   <([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>
   ```
   - Matches HTML tags and their content.

7. **Phone Number (US format) Validation:**
   ```regex
   ^\(\d{3}\) \d{3}-\d{4}$
   ```
