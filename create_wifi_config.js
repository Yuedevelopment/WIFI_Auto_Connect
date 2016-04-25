    var XMLWriter = require('xml-writer')
	var fs=require("fs")

	function writeConfig(SSID,PASSWORD){
        
			var xml = new XMLWriter()
            //开始插入xml
			xml.startDocument()
			xml.writeDocType('plist', "-//Apple Computer//DTD PLIST 1.0//EN", "http://www.apple.com/DTDs/PropertyList-1.0.dtd");

			xml.startElement('plist')
			xml.writeAttribute('version',"1.0")
         
            /**
             * 代码的缩进方式代表了该xml的层级关系
             *  */        
              
            //字典
            xml.startElement('dict')
                //字典key第一层1
                xml.writeElement('key','PayloadContent')
                    //字典key对应的值 该值是一个数组
                    xml.startElement('array')
                        //数组下又是一个字典
                        xml.startElement('dict')
                        //字典key1
                        xml.writeElement('key','AutoJoin')
                        //字典key对应的值
                        xml.startElement('true')
                        xml.endElement()
                        
                        //字典key2
                        xml.writeElement('key','EncryptionType')
                        xml.writeElement('string','WPA')
                        
                        //字典key3
                        xml.writeElement('key','HIDDEN_NETWORK')
                        //字典key对应的值
                        xml.startElement('false')
                        xml.endElement()
                        
                        //字典key4
                        xml.writeElement('key','IsHotspot')
                        //字典key对应的值
                        xml.startElement('false')
                        xml.endElement()
                        
                        //字典key5
                        xml.writeElement('key','SSID_STR')
                        xml.writeElement('string',SSID)             //wifi 的 ssid
                        
                        //字典key6
                        xml.writeElement('key','Password')
                        xml.writeElement('string',PASSWORD)     //wifi 的 密码
                        
                        //字典key7
                        xml.writeElement('key','PayloadDescription')
                        xml.writeElement('string','Configures Wi-Fi settings')
                        
                        //字典key8
                        xml.writeElement('key','PayloadDisplayName')
                        xml.writeElement('string','Wi-Fi')
                        
                        //字典key9
                        xml.writeElement('key','PayloadIdentifier')
                        xml.writeElement('string','com.apple.wifi.managed.C7A1AD16-6FE5-4B65-A304-0B7CD5856B0C')
                        
                        //字典key10
                        xml.writeElement('key','PayloadType')
                        xml.writeElement('string','com.apple.wifi.managed')
                        
                        //字典key11
                        xml.writeElement('key','PayloadUUID')
                        xml.writeElement('string','71352589-18D6-4D48-80F4-FCFF7B5B7A4E')
                        
                        //字典key12
                        xml.writeElement('key','PayloadVersion')
                        xml.writeElement('real','1')
                        
                        //字典key13
                        xml.writeElement('key','ProxyType')
                        xml.writeElement('string','None')
                        
                        //字典key14
                        xml.writeElement('key','ServiceProviderRoamingEnabled')
                        //字典key对应的值
                        xml.startElement('false')
                        xml.endElement()
                        
                        //字典key15
                        xml.writeElement('key','_UsingHotspot20')
                        //字典key对应的值
                        xml.startElement('false')
                        xml.endElement()
                        
                    xml.endElement() //结束字典
                    xml.endElement() //结束数组
            
            //字典key第一层2
            xml.writeElement('key','PayloadDisplayName')
            xml.writeElement('string','糖果的描述文件') //文件显示名称
            
            xml.writeElement('key','PayloadOrganization')
            xml.writeElement('string','某某公司发行(我是组织名称)') //文件显示名称
            
            xml.writeElement('key','PayloadDescription')
            xml.writeElement('string','包含了wifi的信息(我是描述文件内容的解释)') //文件显示名称
            
            //字典key第一层3
            //唯一标识符，在设备上安装描述文件将替换任何已安装且又相同标识符的描述文件
            xml.writeElement('key','PayloadIdentifier')
            xml.writeElement('string','tangguodemini.lan.D8B56B74-095B-4E4F-929A-FE3ECD8A8C3E')    
            
            //字典key第一层4
            xml.writeElement('key','PayloadRemovalDisallowed')
            //字典key对应的值
            xml.startElement('false')
            xml.endElement()
            
            //字典key第一层5
            xml.writeElement('key','PayloadType')
            xml.writeElement('string','Configuration')
            
            //字典key第一层6
            xml.writeElement('key','PayloadUUID')
            xml.writeElement('string','6CE29541-1998-47CF-9351-84AF9434B6FD')
            
            //字典key第一层7
            xml.writeElement('key','PayloadVersion')
            xml.writeElement('integer','1')
            
            xml.endDocument()
            
           console.log(xml.toString());

		   fs.writeFile('wifi_config.mobileconfig',xml.toString())
            
	}

	var arguments = process.argv.splice(2);
    console.log('canshu=' + process.argv)
	writeConfig(arguments[0],arguments[1])
    
    /**
     * 用法 
     * node json2plist.js SSID(WIFI的名称) PASSWORD(WIFI的密码)
     * xml-writer 需要添加xml-writer模块
     */